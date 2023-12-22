# 프로젝트 소개

![](https://velog.velcdn.com/images/fkstndnjs/post/09bc5e31-9f68-4643-9607-bcce9e6b6ea8/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/0530a752-3bc0-4a63-a173-604cb6de9d7d/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/c97a1532-9d62-422b-90fc-8a0862bd8aee/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/b1c72f82-3404-458d-8a64-694895b8406d/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/3ca92a45-f374-42e1-943d-9be90e411940/image.png)

그리니는 슬로우 패션을 지향하는 플랫폼으로, 베스트 챌린지와 데일리룩 등의 다양한 컨텐츠를 통해 사용자들과 슬로우 패션 문화를 공유합니다. 그리니의 매거진은 슬로우 패션에 대한 깊이 있는 정보를 제공하며, 프로모션 배너를 통해 다양한 이벤트와 프로모션을 알립니다.

---

# 주요 기능

- **유저**

  - 회원가입
  - 로그인
  - 아이디 찾기
  - 비밀번호 찾기

- **데일리룩**
  - 데일리룩 참여, 전체 조회, 상세 조회, 수정, 삭제
  - 댓글 기능
  - 좋아요, 북마크 기능
- **매거진**
  - 전체 조회, 상세 조회
- **이벤트**
  - 전체 조회, 상세 조회
- **ETC**
  - NestJS의 Interceptor를 사용하여 API 응답 형식을 일관성있게 유지
  - NestJS의 Filter를 사용하여 예외 처리를 일관성있게 관리
  - Swagger를 사용하여 API를 문서화
  - Swagger 문서에 express-basic-auth 미들웨어를 사용하여 접근을 제한
  - NestJS Throttler를 사용하여 앱의 요청 횟수를 제한
  - JwtAuthGuard를 사용하여 JSON Web Token(JWT) 기반의 사용자 인증을 구현
  - RolesGuard를 사용하여 사용자의 역할을 기반으로 액세스 권한을 제어

---

# 사용 기술

1. **NestJS**: 이 프로젝트는 NestJS, 하나의 Node.js 프레임워크를 사용하고 있습니다. 여기에는 다음 NestJS 관련 패키지들이 포함됩니다: `@nestjs/common`, `@nestjs/config`, `@nestjs/core`, `@nestjs/jwt`, `@nestjs/mapped-types`, `@nestjs/passport`, `@nestjs/platform-express`, `@nestjs/swagger`, `@nestjs/throttler`, `@nestjs/typeorm`.

2. **TypeORM**: 이 프로젝트는 데이터베이스 액세스를 위해 TypeORM을 사용합니다. 이는 `typeorm` 패키지와 `@nestjs/typeorm` 패키지를 통해 사용됩니다.

3. **MySQL**: 데이터베이스로 MySQL을 사용하고 있습니다. 이는 `mysql2` 패키지를 사용하여 연결합니다.

4. **Express**: `@nestjs/platform-express`를 통해 Express.js를 사용하고 있으며, Express middleware인 `express-basic-auth`도 사용하고 있습니다.

5. **Passport**: 사용자 인증을 위해 Passport를 사용하고 있습니다. 이에는 `passport`, `passport-jwt`, `passport-local` 패키지들이 사용되고 있습니다.

6. **AWS SDK**: Amazon Web Services의 서비스에 접근하기 위해 `aws-sdk` 패키지를 사용하고 있습니다.

7. **bcrypt**: `bcrypt` 패키지를 통해 비밀번호 해싱과 같은 보안 관련 기능을 구현하고 있습니다.

8. **Nodemailer**: 이메일 전송 기능을 위해 `nodemailer` 패키지를 사용하고 있습니다.

9. **UUID**: 고유 식별자 생성을 위해 `uuid` 패키지를 사용하고 있습니다.

10. **Class-transformer** & **Class-validator**: 클래스를 변환하고 유효성을 검사하는데 사용됩니다.

11. **테스팅 도구**: Jest(`jest`, `ts-jest`, `@nestjs/testing`, `@types/jest`)와 Supertest(`supertest`, `@types/supertest`)를 사용하여 단위 테스트와 통합 테스트를 수행합니다.

12. **Typescript**: 전체 프로젝트는 Typescript로 작성되어 있습니다.

13. **Linting and Formatting**: ESLint와 Prettier를 통해 코드를 깔끔하게 유지하고 있습니다.

---

# 팀원

- 기획 1명
- 디자이너 1명
- 프론트엔드 1명
- 백엔드 1명

---

# 역할

- 개발 리드
- 백엔드 개발
- 인프라 구축

---

# AWS 인프라

- EC2: t2.medium
- RDS: db.t3.micro, MySQL
- S3

---

# Swagger 문서

![](https://velog.velcdn.com/images/fkstndnjs/post/2774cb92-c6bf-4642-8a77-493204c4864d/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/839331d4-16c6-4319-a713-4cc2b8204ea3/image.png)
![](https://velog.velcdn.com/images/fkstndnjs/post/00a049f3-9e62-4cb8-903d-232f9a6b2ef3/image.png)
