# Quickstart for jQuery

jQuery 의 기본적인 APIs 로 만들어진 기본 웹어플리케이션입니다. 자세한 사용법은 [Quickstart Overview 페이지]()를 참고하세요.

![](https://raw.githubusercontent.com/KoreaHTML5/quickstart-jquery/74a56d4ed60db61d5d982648e5341ca507881e6f/snapshot.png)

# 빠르게 시작하기

1. 마지막으로 릴리즈 된 버전을 [여기에서]() 다운로드 하세요.
1. 원하는 프로젝트 경로에 압축을 푸세요 그리고 해당 프로젝트 경로(압출을 푼)로 이동하세요
1. ```bower install && npm install``` 명령으로 관련 파일을 설치하세요 (주의: 반드시 Node.js, bower, gulp 가 설치되어 있어야 합니다.
1. ```gulp serve``` 로 페이지의 동작을 확인하세요
1. 업데이트 하세요, 수정해보세요, 새로운 어플리케이션을 만들어 보세요. 코드가 수정할 때 마다 `바로`, `바로` 프리뷰가 되는지 확인하세요.
1. 개발이 끝났다면 ```gulp``` 명령으로 당신의 어플리케이션을 최적화 해보세요 그리고 `dist` 폴더에 어플리케이션 코드가 잘 최적화 되었는지 확인하세요.
1. ```gulp serve:dist``` 로 최적화된 코드의 동작을 확인하세요

# Custom task for this project

## `assets` task

이 프로젝트에서는 전용 테스크가 추가되어 있습니다. 테스크 이름은 `assets` 이며 jQuery 플러그인에서 추가로 사용하는 스타일과 이미지를 추가로 복사 합니다.

```
// Copy the files associated with components
gulp.task('assets', function () {
  return gulp.src([
    'bower_components/iCheck/skins/**/*',
    '!bower_components/iCheck/skins/all.css',
    'bower_components/chosen/chosen-sprite@2x.png',
    'bower_components/chosen/chosen-sprite.png',
  ], {
    dot: true
  }).pipe(gulp.dest('dist/styles'))
    .pipe($.size({title: 'copy'}));
});
```

# Awesome jQuery Plugins

- [Chosen: A jQuery Plugin by Harvest to Tame Unwieldy Select Boxes](http://goo.gl/TgKzj)	
- [Checkboxes and radio buttons customization (jQuery and Zepto) plugin](http://goo.gl/7lYYTR)

# CONTRIBUTE

See [CONTRIBUTE](https://github.com/KoreaHTML5/dev.koreahtml5.kr/blob/master/CONTRIBUTE.md) for more details

# LICENSE

See LICENSE for more details