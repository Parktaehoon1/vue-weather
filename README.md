기존 생각했던 구성

날씨에 따른 옷차림을 알려주는 앱이 필요하여 만듦 

Openweather API 를 활용해서 시간대별 날씨 및 기상으로 프로젝트 만들려고했으나
API가 3.0 유료로 바뀌는 바람에 무료 weather API 로 프로젝트진행

현재 구현 됐는 것
1. 기온에 따른 체감온도 알려줌
2. 카카오맵을 통한 주요 장소 마킹
3. 풍속 등 세세한 기온 정보 구현

구현 예정
1. 기온에 따른 옷차림 추천 -> O
2. 카카오맵 마커를 누르면 그 지역의 기온 알려줌 -> O 

![image](https://user-images.githubusercontent.com/101313551/192421609-130d2351-1fa9-4b74-a449-90c49fc5daf1.png)
카카오 마커 클릭 시 해당지역 좌표값으로 이동하여 그 지역 날씨 데이터 보여줌, 

날씨에 따른 옷차림의 경우 if문으로 진행, 코드가 불필요하게 길어지는 거 같았다. 다른방법도 생각해봐야될거같다.



어려웠던 점. 
동기,비동기에 대한 전반적인 지식 부족으로 새로고침 시 페이지 리셋되는 부분이 있었고,
이 부분은 try, catch 와 async , await 로 해결하였다.

vue build 시 https -> http 호출 이슈<br>
![image](https://user-images.githubusercontent.com/101313551/192421818-47fb3434-a9be-4de7-9a9a-d6b4355205a9.png)
<br>
관련해서 메타태그 <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"> 추가로 해결


앞으로 동기 비동기에 관련 및 메타태그에 대해서 조금 더 깊이 있게 공부해서 데이터가 흘러가른 흐름에 대해 정확하게 알아야겠다.
