---
sidebar_position: 4
description: Itt találod meg a Kingdoms szerver leírását, illetve néhány hasznos tippet és trükköt.
---

# 👑 Kingdoms

> A Kingdoms szerver egy könnyített túlélő szerver, ahol királyságokat is létre tudsz hozni. A szerver lényege az hogy Te légy a szerver királya. Terjeszkedj, ostromolj, fejlessz és védekezz! Szerezd meg a legerősebb felszerelést! Építsd meg a leghatékonyabb farmokat, kereskedj más játékosokkal.

## Néhány alapfogalom a szerveren:

**Királyság (kingdom, k, kiri, stb)** - a szerveren megalapított csapat, amit a lehető legerősebbé kell fejlessz.

**Ostrom (invade)** - az ostrom két királyság között történő csata. Az ostrom segítségével leigázhatsz más királyságokat, ezzel elfoglalva annak területeit.

**Nexuspont (np, nexus)** - egy virtuális fizetőeszköz, amivel fejlesztheted a királyságodat. Nexuspontot szerezhetsz a fúrók segítségével. Elköltheted foglalásra, fejlesztésre, ostromra, struktúrákra, tornyokra, stb.

**Fúró - Struktúrák**, melyek nexuspontot termelnek. Fejlesztés segítségével hatékonyabban termeli a nexuspontot.

**Struktúrák** - Értékes eszközök, amik segítségével valamilyen előnyökre tehetsz szert. Fajtái: erőtér, fúró, szabályzó, bázis, teleport-pont, nexus. Fontos: chunkonként csak egy struktúrát helyezhetsz le.

**Chunk** - A chunk egy 16x16os terület. A területedet chunkonként tudod lefoglalni. Chunkonként maximum 1 struktúrát, illetve maximum 5 tornyot helyezhetsz le.

**Nexus** - A nexus a királyságod irányító panelje. Itt tudsz struktúrákat, tornyokat, illetve fejlesztéseket vásárolni. Itt tudsz beállításokat is változtatni, tagokat kezelni illetve itemeket átalakítani nexuspontá. Hasznos tipp: védd be a nexust csapóajtókkal, ez által megelőzheted, hogy egy ellenséges játékos gyémántkapával kiszedje a nexusodat, ez által nexuspontot lopva.

**Bázis** - Innen könnyen megnyithatod a nexust, anélkül, hogy a /k nexus parancsot, vagy a letett nexust meg kéne nyissad, továbbá nexuspontból is vásárolhatsz érceket.

**Erőtér** - Egy olyan struktúra, mely bevédi a mellette levő chunkokat. Ahhoz hogy erőtérrel védett chunkokat foglalj, az erőteres chunkot kell elfoglalnod.

**Teleport-pont (tp-pont)** - A teleport-pont segítségével struktúrákra tudsz teleportálni.

**Tornyok** - A tornyok segítenek megvédeni a területedet. Több fajtája van, mindegyiknek van előnye és hátránya is. A játékosok által leghasználtabb a lézer torony, amely lézersugarat lő ki, ami akár falakon is át tud hatolni. Hátránya az, hogy drága a lövedék.

**Chunk foglalás** - A chunk foglalás segítségével nagyobb területet tudsz foglalni a királyságodnak. Egy chunk foglalás 200 nexuspontba és 100 dollárba kerül. Az első három foglalás ingyenes. Ahhoz hogy minél több chunkot tudj elfoglalni, szükséged lesz fejlesztésre is. Két királyság között legalább 5 chunk kell legyen. Tipp: soha ne építs a lefoglalt chunkodon kívül, mivel megeshet hogy lerombolnak.

**Pénz ($, dollár)** - A pénz segítségével tudsz kereskedni játékosokkal, tudsz vásárolni a boltból, vásárolhatsz az aukciós házból, stb. Pénz szerezhetsz farmokból.

**Pajzs** - A pajzsot a nexusban aktiválhatod. A pajzs egy olyan védelmi funkció, amely az aktív ideje alatt nem engedi más királyságoknak az ostromolást. Fontos: ha aktív pajzs alatt akarsz ostromolni akkor a pajzsod el fog veszni.

**Eladó láda** - Egy olyan tárgy, amit FyreCoin-ért vásárolhatsz meg. Az eladóláda elad minden olyan tárgyat ami a közelébe esik. Ezt használhatod például tök vagy bambuszfarmoknál, annak érdekében, hogy hatékonyabbá tedd az eladást.

**Dinamikus bolt** - A hagyományos shopgui felturbózott verziója. Kereslet által változnak az árak.

## Fontos és hasznos parancsok:

```yaml
/k - a kingdoms plugin parancsa
/k help - a kingdoms parancsok leírása
/k create (királyság neve) - királyság létrehozása
/k lore (leírás) - leírás beállítása a királyságodnak
/k claim - chunk foglalása
/k unclaim - chunk lefoglalásának feloldása
/k nexus - nexus lerakása
/k nexus open - nexus távoli elérése
/k unclaimall - minden chunk feloldása (kivéve a nexus chunkját)
/k sell - struktúra vagy torony eladása nexuspontért
/k info (királyság) - adatok megtekintése a saját vagy más királyságról
/k invite (játékos) - játékos meghívása a királyságba (csak saját felelőségre)
/k kick (játékos) - játékos kirúgása a királyságból
/k ally (királyság) - szövetség egy királysággal
/k enemy (királyság) - királyság megjelölése ellenségnek
/k promote (játékos) - játékos felfokozása
/k demote (játékos) - játékos kirúgása
/k home - teleportálás a királyság home pontjához
/k sethome - home pont beállítása a jelenlegi helyzetedre
/k map - közeli chunkok térképének megnyitása
/k invade - királyság ostromolása
/k - Alap parancs
/k fly - repülés bekapcsolása a királyság területén (örök rang szükséges)
/k extractor - a királyságod összes fúrója által megtermelt nexuspont begyüjtése (örök rang szükséges)
/ah - aukciós ház megnyitása
/trade (játékos) - biztonságos csere rendszer, ahol akár FyreCoin-nal is tudsz kereskedni.
/spawn - teleportálás a spawnra
/hub - teleportálás a szerver lobby-jába
/kulcs - rangod kulcs csomagának lehívása (rang szükséges)
/shopgui - dinamikus bolt megnyitása
/shop - InGame bolt megynitása
/sell ha - eladja az összes kezedben levő tárgyat pénzért
/k chat k - chatelés csak a királyságodnak
/k chat g - chatelés a globális chaten (rendes chat)
/k chat a - chatelés a szövetséges chaten
```

## Tippek:

Ne vegyél be senkit olyant a királyságodba, akiben nem bízol. A FyreMC csapata nem vállal felelősséget az esetleges királyságon belüli lopásért.

Ha hibát találsz ne élj vele vissza! Inkább jelentsd a FyreMC csapatának ticketben! Ha még is kihasználod a hibát, számíts egy kitiltásra, ami legalább 30 napot tart.

Ne fogadj el teleportációt akárkitől! Ha elfogadod, könnyen lehet hogy megostromolnak.

Védd be a területedet minél több toronnyal. A tornyok segítségével könnyedén távol tarthatod az ellenséget.

A királyságod kezdetén fektess minél több nexuspontot fúróba! A fúró garantáltan visszahozza az árát.

Vásárolj lootboxokat, hála a lootboxoknak, könnyedén és olcsón megszerezheted a legjobb felszerelést

Bármi csalást észlesz, készíts róla képes vagy videós bizonyítékot, majd küldd el a FyreMC csapatának ticketben!

Olvasd el a Kingdoms szabályzatát, annak érdekében, hogy elkerüld az esetleges szabálysértéseket.

Fektesd a pénzedet automata farmokba! Az automata farmokat ugyan drága megépíteni, de a pénzt általában visszahozzák. A tök illetve a bambuszfarmok termelnek a legjobban

Foglalj el falukat, ennek segítségével sok falusira tehetsz szert.

Köss szövetségeket más királyságokkal, és igázzátok le a közös ellenségeteket!

Ostromold meg a szomszéd királyságot, így védekezve az ostrom ellen.

```

```
