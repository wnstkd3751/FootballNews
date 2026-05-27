package football.news.domain

import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "accounts")
data class Account(

    @Id
    val id: String? = null,

    val account: String,

    val reliability: String,

    val keywords: List<String>,

    val enabled: Boolean
)