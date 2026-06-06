package football.news.service

import football.news.domain.BreakingType

import org.springframework.stereotype.Service

@Service
class BreakingService {

    private val breakingKeywords = listOf(

        "here we go",

        "official",

        "confirmed",

        "done deal",

        "agreement reached",

        "medical completed",

        "signed",

        "contract signed",

        "exclusive"
    )

    private val rumorKeywords = listOf(

        "interested",

        "monitoring",

        "considering",

        "following",

        "linked",

        "could",

        "might"
    )

    fun classify(
        text: String
    ): BreakingType {

        val lower = text.lowercase()

        if (
            breakingKeywords.any {
                lower.contains(it)
            }
        ) {
            return BreakingType.BREAKING
        }

        if (
            rumorKeywords.any {
                lower.contains(it)
            }
        ) {
            return BreakingType.RUMOR
        }

        return BreakingType.UPDATE
    }
}