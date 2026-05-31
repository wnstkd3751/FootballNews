⚽ Football News Collector

실시간 축구 뉴스 및 이적시장 정보를 수집하고 제공하는 서비스입니다.

주요 축구 기자 및 구단 계정의 게시물을 수집하여 MongoDB에 저장하고 API로 제공합니다.

📌 프로젝트 소개

Football News Collector는 축구 팬들이 여러 SNS와 뉴스 소스를 직접 확인하지 않아도 최신 이적시장 소식과 축구 뉴스를 한 곳에서 확인할 수 있도록 만든 서비스입니다.

🏗️ 기술 스택
Backend
Kotlin
Spring Boot 3
Spring WebFlux
Spring Data MongoDB
Gradle
Database
MongoDB Atlas
External API
X(Twitter) API v2

📡 API 예시
뉴스 조회
GET /news

응답 예시

[
  {
    "id": "68394b9...",
    "title": "Napoli interested in ...",
    "source": "FabrizioRomano",
    "createdAt": "2026-05-30T00:00:00"
  }
]

🔄 데이터 수집 프로세스
Scheduler -> X API 호출 -> 게시물 수집 -> MongoDB 저장 -> REST API 제공

🎯 향후 계획
AI 기반 뉴스 요약
뉴스 중요도 분석
선수별 뉴스 검색
구단별 뉴스 필터링
실시간 알림 기능
