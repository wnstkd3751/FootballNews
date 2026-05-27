package football.news.dto

import com.fasterxml.jackson.annotation.JsonProperty

data class XSearchResponse(

    val data: List<XPostDto>?
)

data class XPostDto(

    val id: String,

    val text: String,

    @JsonProperty("created_at")
    val createdAt: String
)