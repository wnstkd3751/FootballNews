package football.news.repository

import football.news.domain.News

import org.springframework.data.mongodb.repository.MongoRepository

interface NewsRepository
    : MongoRepository<News, String> {

    fun existsByTweetId(tweetId: String): Boolean
}