package football.news.controller

import football.news.domain.News

import football.news.repository.NewsRepository

import org.springframework.web.bind.annotation.GetMapping

import org.springframework.web.bind.annotation.RequestMapping

import org.springframework.web.bind.annotation.RestController

@RestController

@RequestMapping("/api/news")
class NewsController(

    private val newsRepository: NewsRepository
) {

    @GetMapping
    fun getNews(): List<News> {
        println("GET NEWS CALLED")


        return newsRepository.findAll()
            .sortedByDescending {

                it.createdAt
            }
    }

    @GetMapping("/breaking")
    fun getBreakingNews(): List<News> {

        return newsRepository.findAll()

            .filter {
                it.breaking
            }

            .sortedByDescending {
                it.createdAt
            }
    }
}