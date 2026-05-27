package football.news.repository

import football.news.domain.Account

import org.springframework.data.mongodb.repository.MongoRepository

interface AccountRepository
    : MongoRepository<Account, String> {

    fun findByEnabled(enabled: Boolean): List<Account>
}