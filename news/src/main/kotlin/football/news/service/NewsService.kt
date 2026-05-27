package football.news.service

import football.news.domain.News

import football.news.dto.XSearchResponse

import football.news.repository.NewsRepository

import org.slf4j.LoggerFactory

import org.springframework.stereotype.Service

@Service
class NewsService(

    private val newsRepository: NewsRepository
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

            val breaking =
                isBreaking(it.text)

            val news = News(

                tweetId = it.id,

                author = account,

                content = it.text,

                reliability = reliability,

                url =
                    "https://x.com/$account/status/${it.id}",

                createdAt = it.createdAt,

                breaking = breaking
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