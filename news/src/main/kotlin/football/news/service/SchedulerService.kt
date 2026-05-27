package football.news.service

import football.news.repository.AccountRepository

import org.slf4j.LoggerFactory

import org.springframework.scheduling.annotation.Scheduled

import org.springframework.stereotype.Service

@Service
class SchedulerService(

    private val accountRepository: AccountRepository,

    private val xApiService: XApiService,

    private val newsService: NewsService
) {

    private val log =
        LoggerFactory.getLogger(this::class.java)

    @Scheduled(cron = "0 0 * * * *")
    fun collectNews() {

        log.info("News Collect Start")

        val accounts =
            accountRepository.findByEnabled(true)

        accounts.forEach { account ->

            try {

                val response =
                    xApiService.searchTweets(account)

                if (response != null) {

                    newsService.saveTweets(

                        response = response,

                        account = account.account,

                        reliability =
                            account.reliability
                    )
                }

            } catch (e: Exception) {

                log.error(
                    "Collect Error -> ${account.account}"
                )
            }
        }
    }
}

@PostConstruct
fun init() {

    collectNews()
}