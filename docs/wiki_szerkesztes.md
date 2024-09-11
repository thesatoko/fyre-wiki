---
sidebar_position: 6
description: Leírás arról, hogy hogyan tudod Te magad szerkeszteni a FyreMC Wiki-t.
---

# ⌨ Wiki Szerkesztés

> Mindenki számára lehetőség van új oldalakat létrehozni, a meglévőket szerkeszteni hiszen a FyreMC Wiki [open source](https://hu.wikipedia.org/wiki/Ny%C3%ADlt_forr%C3%A1sk%C3%B3d%C3%BA_szoftver). Minden oldal alján a bal oldalt van egy `Szerkesztés GitHub-on` gomb. GitHub profillal a böngésződben is szerkeszthetsz egy adott oldalt.

:::warning
Ha bár mindenki hozzájárulhat a szerkesztéshez, nem ajánljuk mindenkinek. Kis informatikai tudással rendelkezned kell ahhoz, hogy könnyen megértsd a működését. Nem azt mondom, hogy nem lehet megtanulni viszont előnyben van az aki már használt Git-et, Node.js-t illetve szerkesztett Markdown azaz .md kiterjesztésű fájlokat!
:::

> Mi ennek a menete? Röviden egy "másolatot" (fork-ot) kell létrehoznod a projektből amit a saját számítogépeden szerkesztesz majd "kérelmezed" (pull request) azt, hogy a változtatásaid bekerüljenek az éles oldalba. Elsőre ez bonyolultnak hangozhat, de azért van ez az oldal, hogy ebben a folyamatban segítsen.

## Milyen szerkesztéseket adhatok hozzá?

<ul>
   <li>Ha például elírási hibát találsz, azt javíthatod.</li>
   <li>Ha esetleg tartalmi hibát találsz, azt is kijavíthatod.</li>
   <li>Ha új tartalmat, leírást adnál hozzá egy oldalhoz.</li>
   <li>Tulajdonképpen bármilyen esetben, amikor úgy érzed, hogy valami hiányzik/nem jó.</li>
</ul>

## Mi történik akkor ha trollkodást írok bele?

Röviden: semmi. A változtatásokat mielőtt kikerülne a rendes oldalra átnézzük, és csak akkor kerül ki ha

<ul>
   <li>tartalmilag megfelel</li>
   <li>nincsen benne semmi trollkodás</li>
</ul>

## Milyen jutalmakat kapok, ha gyakori rendszereséggel hozzájárulok a FyreMC Wiki szerkesztéséhez?

Az, aki gyakori hozzájárulást tesz a FyreMC Wiki fejlődéséhez az helyet kap a **Wiki Team** csapatban. A csapat tagjai FyreCoin jutalomhoz juthatnak munkájukért cserébe.

## Szeretnék szerkeszteni

Elsősorban, hogy elkezdhesd a szerkesztést telepítened kell pár programot.

<ul>
    <li>``Git`` - Verzió kezelő szoftver. [Letöltés](https://git-scm.com/downloads)</li> 
    <li>``GitHub Desktop`` - A GitHub asztali verziókezelője. [Letöltés](https://desktop.github.com/download/)</li> 
    <li>``Szövegszerkesztő`` - Valamilyen szövegszerkesztő programra lesz szükséged. Ajánljuk a Visual Studio Code-ot. [Letöltés](https://code.visualstudio.com/download)</li> 
    <li>``Node.js`` - Node.js Runtime. Ez szükséges a FyreMC Wiki futtatásához a számítógépeden. [Letöltés](https://nodejs.org/en/download/prebuilt-installer/current)</li> 
</ul>

Ezek a programok feltelepítése után egy úgy nevezett "fork"-ot, avagy másolatot kell létrehoznod a FyreMC Wiki-ből. **Szükséged lesz egy GitHub profilra is!** Ha még nincs, akkor [itt](https://github.com/join) tudsz regisztrálni.

### Fork létrehozása

1. Első GitHub Desktop indításkor be kell jelentkezned a GitHub profilodba.
   <img src="/img/szerkesztes/github_desktop_login.JPG" width="620"></img>
2. Bejelentkezés után konfigurálnod kell a Gitet. Minden amit ajánl, az jó lesz. Kattintsuk a `Finish` gombra.
   <img src="/img/szerkesztes/github_desktop_configure.JPG" width="620"></img>
3. A konfigurálás után ennek az oldalnak kell, hogy fogadjon.
   <img src="/img/szerkesztes/github_desktop_home.JPG" width="620"></img>
4. Most egy kicsit menjünk vissza a GitHub webes felületére. Azon belül is a FyreMC Wiki repository-jába [IDE](https://github.com/risdn/fyre-wiki/) kattintva. Ha bevagyunk jelentkezve az oldalon, akkor kattintsunk a `Fork` gombra a jobb felső részen.
   <img src="/img/szerkesztes/create_fork.JPG" width="620"></img>
5. Az automatikusan beírt adatok jók lesznek nekünk. Kattintsunk a `Create Fork` gombra.
   <img src="/img/szerkesztes/create_fork_2.JPG" width="620"></img>
   :::caution
   Az "Owner" mező a Te esetedben automatikusan a te GitHub profilod lesz. Nem kell megváltoztatnod!
   :::

### Projekt elindítása, felkészülés a szerkesztésre

1. Most kicsit menjünk vissza a GitHub Desktop-ba hiszen a fork-ot amit előbb elkészítettünk le kell klónoznunk a gépünkre, hogy szerkeszteni tudjuk. Ha sikerült megcsinálnod a fork-ot, akkor a főoldalon már látnod kell a "Your Repositories" résznél azt, hogy `felhasználóneved/fyre-wiki`. Kattints a `Clone felhasználóneved/fyre-wiki` gombra. Majd szintén a `Clone` gombra.
   <img src="/img/szerkesztes/repository_cloning.JPG" width="620"></img>

2. Ha az előzö lépésekben sikerrel jártál, akkor ennek az oldalnak kell, hogy fogadjon téged:
   <img src="/img/szerkesztes/cloning_success.JPG" width="620"></img>

3. Most nyissuk meg a projektet Visual Studio Code-al. Indítsuk el a Visual Studio Code-ot majd a bal felső sarokban található `File -> Open Folder` gombbal nyissuk meg azt a mappát, ahova korábban klónoztuk a projektet.
   <img src="/img/szerkesztes/vsc_open_folder.JPG" width="320"></img>

4. Itt keressük ki azt a mappát, ahova klónoztunk még a GitHub Desktop-ban és nyissuk meg azt. Ha mindent jól csináltunk, ezt kell, hogy lássuk:
   <img src="/img/szerkesztes/vsc_repo_opened.JPG" width="620"></img>

5. Indítsuk el a projektet a saját gépünkön. A felső menüben válasszuk ki a `Terminal -> New Terminal` gombot. Alul ilyenkor meg fog jelenni egy ablak, ami egy [Windows Terminal](https://en.wikipedia.org/wiki/Windows_Terminal).
   <img src="/img/szerkesztes/vsc_new_terminal.JPG" width="320"></img>

6. Ide gépeljük be egymás után a következő parancsokat:

```bash title="Első parancs"
npm install
```

<img src="/img/szerkesztes/vsc_npm_install.JPG" width="320"></img>

```bash title="Második parancs"
npm start
```

<img src="/img/szerkesztes/vsc_npm_start.JPG" width="320"></img>

:::info
Mit is csináltunk most pontosan? Az első paranccsal letöltöttük a projektbe a szükséges úgynevezett "dependency"-ket. Ezek tulajdonképpen szükségesek ahhoz, hogy a projekt eltudjon indulni hisz ezeket a modulokat használja.
A második paranccsal pedig elindítottuk magát a projektet a saját számítógépünkön.
:::

Ha mindent jól csináltunk, akkor az `npm start` parancs lefuttatása után már meg is nyílt a böngészőnkben a projekt amit szerkeszthetünk.

:::info
Kicsit lentebb lesz szó arról, mi a teendő akkor, ha például egy másik alkalommal is szerkeszteni szeretnél.
:::

### Szerkesztés megkezdése

Ha minden sikerült a fenti lépésekből, fut a projekt a számítógépünkön akkor megkezdhetjük a tényleges szerkesztést. A Visual Studio Code-ban találhatjuk a projekt struktrújáját. Neked a legtöbb esetben **csak is a .md kiterjesztésű fájlokhoz kell nyúlnod.**
<img src="/img/szerkesztes/vsc_file_explorer.JPG" width="320"></img>

### Szintaxis avagy a szerkesztési nyelv

:::info
A .md fájlok, azaz a Markdown fájlok olyan szöveges fájlok, amelyeket egyszerű szövegszerkesztőkkel lehet írni és olvasni, és amelyek speciális jelek (például #, \*, -) segítségével jelzik a formázásokat, mint például a címsorokat, félkövér vagy dőlt betűket, listákat vagy linkeket.
:::

:::tip
Ha még sosem szerkesztettél Markdown fájlt akkor tekintsd meg ezt a linket: https://www.markdownguide.org/basic-syntax/ .
Ez az oldal nagy segítség azok számára, akik még most kezdik a szerkesztést. Itt elsajátíthatod az alapvető szintaxis használatát, például hogyan hozz létre címsorokat, listákat, linkeket, vagy hogyan formázd a szöveget különféle módokon, mint például félkövér vagy dőlt betűkkel.
:::

### Szerkesztettem, hogyan kerülhetnek be a változtatásaim?

1. Ha szerkesztettél valamit, akkor a GitHub Desktop applikációban láthatod, hogy pontosan melyik fájlt és mit. Itt például a szabályzaton belül a `creative.md` fájlban az első címsort szerkesztettem úgy, hogy egy másik emoji legyen a Creative szó előtt.
   :::tip
   Piros sor = régi vagy törölt sor <br />
   Zöld sor = új sor
   :::
   <img src="/img/szerkesztes/github_desktop_changes.JPG" width="720"></img>

2. Ha minden szerkesztésedet rendben találod, akkor a bal alsó sarokban egy úgynevezett "commit" nevet kell adnod a változtatásaidnak. **Ezt lehetőleg angolul tedd!**. 1 rövid mondatban írd le, hogy mit változtattál.
   Például a mi Creative emoji-s esetünkben ez lehet `Change emoji in creative title` azaz "Emoji változtatása a Kreatív címben". Ha nem fér bele egy mondatba, akkor használhatod a **Description** azaz a leírás szövegdobozt is.
   <img src="/img/szerkesztes/github_desktop_commiting.JPG" width="320"></img>
   <img src="/img/szerkesztes/github_desktop_commiting_2.JPG" width="320"></img>
   Ezek után kattintsunk a `Commit to main` gombra.

3. Ha sikerült a commit-olás akkor töltsd fel a változtatásaidat a `Push` gomb megnyomásával.
   <img src="/img/szerkesztes/github_desktop_push.JPG" width="620"></img>
   :::warning
   Fontos, hogy ilyenkor még nem kérvényezted azt, hogy átnézzük a változtatásaidat, csupán csak a saját másolatodat szerkesztetted, viszont az már GitHub-on van.
   :::

4. Utolsó lépésként kérvényezned kell, hogy a változtatásaid felkerüljenek az éles oldalra.

   Nyisd meg a repository-dat (másolatodat) a böngészőben a GitHub Desktop-ból a `Repository -> View on GitHub` gombra kattintva.
   <img src="/img/szerkesztes/github_desktop_view_on_github.JPG" width="320"></img>
   Ilyenkor látni fogod, hogy hány commit-tal tér el az éles verzió a tiédtől:
   <img src="/img/szerkesztes/github_web_ahead.JPG" width="720"></img>
   Ezután navigálj a `Pull Request` oldalra majd kattints a `New Pull Request` gombra.
   <img src="/img/szerkesztes/github_web_create_pr.JPG" width="720"></img>
   Ilyenkor látni fogod azokat a commit-okat amiket szeretnél, hogy bekerüljenek az élesbe. Kattints a `Create Pull Request` gombra.
   <img src="/img/szerkesztes/github_web_create_pr_2.JPG" width="720"></img>
   Itt **el kell** nevezned a Pull Request-edet. Ha egy commitod van, akkor automatikusan az lesz a neve ami az az 1 commité. Ha ez megvan, kattintsunk a `Create pull request` gombra és készen is vagyunk.
   <img src="/img/szerkesztes/github_web_create_pr_3.JPG" width="720"></img>

## Mit kell csinálnom akkor, ha más alkalommal is szeretnék szerkeszteni?

Nem kell minden lépést ilyenkor újra csinálnod.

Első lépésben hozd szinkronba a te repository-dat az élessel:
<img src="/img/szerkesztes/github_web_sync_prod.JPG" width="720"></img>

Ezután csak nyisd meg a mappát ahol a klón van, nyiss egy terminál-t és írd be az `npm start` parancsot, hogy elinduljon a projekt a gépeden.
A változtatásaidat a fent említett módon tudod kérvényezni, hogy bekerüljön. (Commit majd Pull Request).

:::danger
Fontos! Minden alkalommal, amikor nekiállsz szerkeszteni valamit fontos, hogy előtte szinkronba hozd a fent lévőt a te másolatoddal. Erre azért van szükség, hogy már az élesbe került változtatásokat ne írd felül. Az ilyet tartalmazó Pull Request-ek nem fognak bekerülni.
:::
