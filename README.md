# 개발자 포트폴리오

한국어 취업·이직용 단일 페이지입니다. HTML, CSS, JavaScript만 사용하며 설치나 빌드가 필요하지 않습니다. 모든 소개·프로젝트·기술·연락처는 작성용 자리표시자입니다.

## 미리 보기

`index.html`을 브라우저에서 열면 됩니다. 실제 HTTP 경로에서 확인하려면 폴더에서 다음 명령을 실행합니다.

```powershell
python -m http.server 8000
```

브라우저에서 `http://localhost:8000`을 엽니다. 서버 종료는 Ctrl+C입니다. JavaScript가 꺼져 있어도 본문과 메뉴 링크가 표시됩니다.

## 콘텐츠 수정

- `index.html`: 이름, 페이지 제목·설명, 소개, 프로젝트 3개, 기술 활용 경험, 연락처를 수정합니다. `작성 예정`과 대괄호로 표시한 내용을 검색하면 교체할 항목을 찾을 수 있습니다.
- 프로젝트에는 실제 문제, 본인 역할, 구현 이유, 검증한 결과를 기록합니다. 표지 그림은 장식용이며 실제 프로젝트 화면이 아닙니다.
- GitHub 링크가 준비되면 해당 `pending-link`의 `span`을 실제 주소를 가진 `a`로 바꿉니다. 예: `<a class="pending-link" href="https://github.com/사용자/저장소">GitHub에서 보기 ↗</a>`.
- 연락처의 이메일 자리표시자를 `<a href="mailto:실제이메일">실제이메일</a>`로, GitHub 자리표시자를 실제 프로필 링크로 교체합니다. 주소가 준비되지 않았으면 현재의 일반 텍스트를 유지합니다.
- 이력서가 준비되면 `assets/resume.pdf`에 파일을 넣고 연락처 영역에 `<a href="./assets/resume.pdf" download>이력서 다운로드</a>`를 추가합니다.
- `styles.css`: 색상과 레이아웃을 수정합니다. 기본은 모바일 1열, 태블릿 2열, 960px 초과 화면에서 프로젝트 3열입니다.
- `script.js`: 모바일 메뉴 열기·닫기, Escape 키, 화면 크기 변경만 처리합니다.

사진이나 프로젝트 이미지를 추가할 때도 `./assets/image.png`처럼 상대 경로를 사용하세요. `/assets/image.png`는 프로젝트 사이트의 저장소 경로를 벗어납니다.

## GitHub Pages 배포

이 폴더의 `index.html`, `styles.css`, `script.js`, `.nojekyll`, `README.md`를 저장소 루트에 커밋·푸시한 뒤 아래 절차로 Pages를 활성화합니다.

1. 저장소의 **Settings → Pages**로 이동합니다.
2. **Build and deployment → Source**를 **Deploy from a branch**로 설정합니다.
3. 파일을 올린 브랜치(일반적으로 `main`)와 **/(root)**를 선택한 뒤 **Save**를 누릅니다.
4. **Actions**에서 Pages 배포 작업이 성공했는지 확인하고 **Settings → Pages**에 표시되는 사이트 주소를 엽니다.

프로젝트 저장소의 기본 주소는 `https://사용자명.github.io/저장소명/`입니다. 저장소 이름을 `사용자명.github.io`로 지정한 개인 사이트는 `https://사용자명.github.io/`에서 제공됩니다. `.nojekyll`은 파일을 정적 콘텐츠로 제공하기 위한 파일이며 내용이 비어 있는 것이 정상입니다.

설정 권한과 저장소 공개 여부에 따른 제공 조건은 [GitHub Pages 공식 안내](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)를 참고하세요. 별도 도메인과 외부 API 설정은 필요하지 않습니다.

## 확인할 항목

- 375px, 768px, 1440px 화면에서 가로 스크롤, 카드 배치와 글자 잘림 확인.
- Tab으로 본문 바로가기, 메뉴, 프로젝트 보기, 맨 위로 링크 이동 확인.
- 모바일 메뉴의 열기·닫기, Escape로 닫기, 메뉴 선택, 화면 확대·축소 확인.
- JavaScript를 끈 상태에서 메뉴와 본문 확인.
- 저장소 경로에서 CSS·JavaScript 요청이 성공하는지 확인.
- 실제 내용을 넣은 뒤 이메일·GitHub·이력서 링크 확인.

실제 GitHub Pages 배포와 브라우저 화면 검증 결과는 아직 확인되지 않았습니다.
