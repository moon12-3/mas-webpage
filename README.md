# zip 파일을 풀고 나서 할 것

1. 터미널에 npm i 명령어 입력
2. 무언가 우다다 나오는데 그거 끝나면 npm start

# 초반 영상에서 skip 버튼 눌러서 영상이 안 나온다면

1. 개발자 도구 -> Application
2. local storage 에 skipped 속성을 false로 변경 후 새로고침

---

# 새로 추가된 동아리 부원이나 프로젝트를 페이지에 보이게 하고 싶다면

1. src/components/db/data.json에 추가 (차후 해당 프로젝트 재활용 목적이 있다면 DB연동을 추천합니다. 해당 json파일은 GET API 내용을 하드코딩한거라 이해하시면 됩니다)
   - 필드 추가를 원할 시 모든 부원에게 동일한 필드 추가
   - 내용 수정을 원할 시 해당 부원의 record 부분으로 이동하여 내용 수정

# 새 프로젝트를 추가하고 싶다면

1. src/components/db/project.json에 추가
