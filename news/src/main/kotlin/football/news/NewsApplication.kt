package football.news

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

import org.springframework.scheduling.annotation.EnableScheduling

@SpringBootApplication
@EnableScheduling
class NewsApplication

fun main(args: Array<String>) {
    runApplication<NewsApplication>(*args)
}