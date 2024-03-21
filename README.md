# 💌 rolling
추억의 롤링 페이퍼를 웹 상에서도 즐길 수 있는 플랫폼인 '롤링' 서비스

# 👨‍💻 팀원

| 이름   | GitHub 링크                           | 
| ------ | ------------------------------------- | 
| 권나은 | [naeun14](https://github.com/naeun14) | 
| 임동현 | [DHyeon98](https://github.com/DHyeon98) |
| 여승구 | [skoo1100](https://github.com/skoo1100) | 

# 💻 기술 스택
![HTML](https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![HTML](https://img.shields.io/badge/-HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![CSS](https://img.shields.io/badge/-CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![Recoil](https://img.shields.io/badge/-recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white) 

 
<br>

# 💾 폴더구조
```
├── README.md
├── .eslintrc.js
├── .gitignore
├── .prettierrc.json
├── index.html
├── package-lock.json
├── package.json
│
├── public
│    └── images
└── src
     ├── App.jsx
     ├── main.jsx
     ├── apis
     │     ├── apiRecipient.jsx
     │     ├── messageApi.jsx
     │     └── reactionApi.jsx
     ├── asset
     │     ├── css
     │     └── fonts
     ├── components
     │     ├── background
     │     ├── button
     │     ├── chooseBackground
     │     ├── editor
     │     ├── header
     │     ├── inputName
     │     ├── main
     │     ├── postId
     │     ├── profileImage
     │     ├── profileList
     │     ├── reaction
     │     ├── rollingPaper
     │     ├── search
     │     ├── textField
     │     └── toggleButton
     ├── pages
     │     ├── list
     │     ├── notFound
     │     ├── post
     │     │     └── id
     │     │          ├── edit
     │     │          └── message     
     │     └── search
     ├── path
     │     └── path.jsx
     ├── store
     │     └── recoil
     └── utils
           ├── modalPortal.jsx
           └── utilsFunction.js
```

<br>

# 🌍 배포 주소 
개발: https://23-rolling.netlify.app/ <br>
회의록&회고: https://www.notion.so/b5d36af00f2049b78327a34e7411743c

# 📖 화면 구성
### list 페이지
- 슬라이드 가능한 롤링페이퍼를 볼 수 있습니다.
- 인기순과 최근 생성된 순대로 볼 수 있습니다.
- 롤링페이퍼를 클릭하면 해당 롤링페이퍼의 post/id 페이지로 이동합니다.
![cb905eb7-2a56-41eb-8169-3dbacc65e746](https://github.com/Codeit-23team/23_rolling/assets/84865501/a4558141-875b-4dc6-8da7-0071715ebd5a)

### post 페이지
- 롤링페이퍼 생성자의 이름과 배경을 입력할 수 있습니다.
- 이름과 배경 선택 후 생성하면 해당 post/id 페이지로 이동합니다.
![55efce97-1bc8-45c6-b949-d0fffec9542a](https://github.com/Codeit-23team/23_rolling/assets/84865501/f9c0f8b9-25a4-4877-b434-1cc71ebdc9c1)

### post/id 페이지
- 롤링페이퍼의 message box를 볼 수 있으며, 이모티콘 추가, url 공유를 할 수 있습니다.
- 수정하기를 누르면 edit 페이지로 이동하고, 롤링페이퍼를 삭제하거나, message box를 삭제할 수 있습니다.
![43721103-7fef-465f-90f9-a6197d5a67a6](https://github.com/Codeit-23team/23_rolling/assets/84865501/c9187f2b-c2e8-42c1-91ed-f208c246132e)

### message 페이지
- 작성자의 이름, 프로필, 관계 등을 정할 수 있습니다.
- 빈칸의 내용을 입력 후 생성하면 해당 post/id 페이지로 이동하고, message box가 생성됩니다.
![83f821ec-206c-46b2-b950-297f1a6dc738](https://github.com/Codeit-23team/23_rolling/assets/84865501/c398458b-1077-473c-b5a5-51e30c52d7e1)

### search 페이지
- 검색 아이콘을 클릭하면 slide toggle 가능한 search box가 나옵니다.
- 검색하고싶은 검색어를 입력하면 해당 검색어를 포함한 롤링페이퍼의 생성자 이름을 보여줍니다.
- 필터링된 롤링페이퍼를 클릭하면 해당 post/id 페이지로 이동합니다.
![81739b0e-69f1-489d-8796-c1a8124f0522](https://github.com/Codeit-23team/23_rolling/assets/84865501/424c4296-169f-42f1-ad40-1cee35e3487a)



