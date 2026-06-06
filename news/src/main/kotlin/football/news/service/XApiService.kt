package football.news.service

import football.news.domain.Account

import football.news.dto.XSearchResponse

import org.springframework.stereotype.Service

import org.springframework.web.reactive.function.client.WebClient

@Service
class XApiService(

    private val webClient: WebClient
) {

    fun searchTweets(
        account: Account
    ): XSearchResponse? {

        val keywordQuery =
            account.keywords.joinToString(" OR ")

        val query =
            "(from:${account.account}) " +
            "($keywordQuery) " +
            "-is:retweet lang:en"

        return webClient
            .get()
            .uri {

                it.path("/tweets/search/recent")

                    .queryParam(
                        "query",
                        query
                    )

                    .queryParam(
                        "max_results",
                        10
                    )

                    .queryParam(
                        "tweet.fields",
                        "created_at"
                    )

                    .build()
            }
            .retrieve()
            .bodyToMono(
                XSearchResponse::class.java
            )
            .block()
    }

}