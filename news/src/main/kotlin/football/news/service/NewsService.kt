package football.news.service

import football.news.domain.News

import football.news.dto.XSearchResponse

import football.news.repository.NewsRepository

import org.slf4j.LoggerFactory

import org.springframework.stereotype.Service

import football.news.domain.BreakingType

import football.news.service.OpenAiService

@Service
class NewsService(

    private val newsRepository: NewsRepository,

    private val breakingService: BreakingService,

    private val openAiService: OpenAiService
) {

    private val log =
        LoggerFactory.getLogger(this::class.java)

    fun saveTweets(

        response: XSearchResponse,

        account: String,

        reliability: String
    ) {

        response.data?.forEach {

            if (
                newsRepository.existsByTweetId(it.id)
            ) {
                return@forEach
            }

            val type =
                breakingService.classify(
                    it.text
                )

            val ai =
    openAiService.analyze(
        it.text
    )


val news = News(

    tweetId = it.id,

    author = account,

    content = it.text,

    reliability = reliability,

    url =
        "https://x.com/$account/status/${it.id}",

    createdAt = it.createdAt,

    breaking =
        type == BreakingType.BREAKING,

    breakingType = type,

    title = ai.title,

    translatedContent =
        ai.translatedContent,

    tags = ai.tags,

    player = ai.player
)

            newsRepository.save(news)

            log.info(
                "Saved Tweet -> ${it.id}"
            )
        }
    }

    private fun isBreaking(
        text: String
    ): Boolean {

        val breakingKeywords = listOf(

            "here we go",

            "exclusive",

            "done deal",

            "agreement",

            "medical",

            "confirmed",

            "official"
        )

        return breakingKeywords.any {

            text.lowercase().contains(it)
        }
    }
}