use `WrenchScrewdriverIcon`

rename `PageMenu` to `PageDesktopMenu`

[page-layout] distinguish auth vs guest on both mobile and desktop

[page-layout] show `isLoadingUser`

rename `loadAuthUser` to `loginByToken`
rename `login` to `loginByPassword`
`loginByPassword` call `loginByToken`

do not send login request when there is no token

[refactor] clear auth process
