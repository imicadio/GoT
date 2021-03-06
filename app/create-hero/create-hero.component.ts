import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';
import { IHero } from '../hero/shared/hero.model'

const REGEX = /^[0-9](,[0-9])*$/; 
const REGEX_NAME = /^[a-zA-Z ._-]*$/;
const urlR = /^(http)?s?:?(\/\/[^"']*)?$/;

@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.css']
})
export class CreateHeroComponent implements OnInit {
  
  ngOnInit() {
  }

  heroes = [
    { //0
      id: 1,
      name: 'Jon Snow',
      opis: 'Jon Snow uważany jest za bękarta lorda Eddarda Starka. Ned nigdy nie wyjawił nikomu tożsamości matki chłopca, nawet samemu Jonowi, co jest niecodzienne, jako iż zazwyczaj bękarci mieszkają z matkami i nie znają swoich ojców. Wyruszając na południe, by dołączyć do rebelii swojego przyjaciela, Roberta, zostawił swoją nową żonę Catelyn Tully w Riverrun, która później urodziła jego pierworodnego syna, Robba. Wkrótce Eddard powrócił z wojny z niemowlęciem, które nazwał swoim bękartem. Uznane bękarty wielkich panów zazwyczaj odsyłane są do innych zamków lub twierdz, będących w posiadaniu ich rodziców, by dobrze się nimi zajęto, ale aby równocześnie nie wychowywały się razem z prawowitymi dziećmi lordów. Jednakże Eddard Stark ogłosił, że wychowa Jona w Winterfell razem ze swoimi potomkami. Robb zawsze traktowany był jak dziedzic Północy, ale bękart Neda nigdy nie miał gorszego życia niż jego młodsi bracia, Bran i Rickon. Obecność Jona w zamku zawsze była źródłem sprzeczek między Eddardem i jego żoną Catelyn. Chłopak zawsze przypominał jej o tym, że Ned zdradził ją, lecz mimo to zawsze kochała swojego męża. Natomiast samego Jona zawsze nienawidziła. Nie była jego macochą, ponieważ bękart nigdy nie został legitymizowany. Lecz mimo to zawsze był dobrze traktowany przez żonę swego ojca. Była dla niego oschła i unikała kontaktu, kiedy mogła, ale nigdy nie był przez nią zaniedbany[3][4]. Cat wspomina, że kiedy Jon był młody i zachorował, ona żałowała, iż wcześniej modliła się o jego śmierć i pozostała przy chłopcu całą noc, modląc się do bogów, by pozwolili mu przeżyć. Wtedy też zaakceptowała to, że nie może winić Jona za romans swojego męża. Jako bękart, Jon dorastał, czując się jak odmieniec. Ogólnie był traktowany dobrze, zawsze miał dach nad głową, jednakże w przypadku większych uczt, w których brały udział wielkie rody szlacheckie, Jon nie mógł zasiadać blisko swojej rodziny przy braciach i siostrach i zazwyczaj pozostawał z tyłu sali[3]. To jednak mu nie przeszkadzało, ponieważ mógł wtedy bawić się jak każdy prostaczek oraz pić tyle alkoholu, ile chciał, czego lord Eddard Stark zabraniał swoim pozostałym dzieciom. Jon otrzymał stosowne szkolenie bojowe od kasztelana Winterfell, ser Rodrika Cassela. Był bardzo dobrym przyjacielem swojego przybranego brata Robba oraz jego towarzyszem w treningu i jeździe. Ze swojego przybranego rodzeństwa największa więź łączyła go z Aryą, która ze względu na swoją chłopięcą naturę również czuła się jak odmieniec. Druga siostra Jona, Sansa nie była tak uprzejma wobec przybranego brata i często obrażała go, najprawdopodobniej mając za przykład swą matkę. Z pozostałymi braćmi, Branem i Rickonem, Jon rozwinął ciepłą, braterską więź.',
      imageUrl: 'https://vignette3.wikia.nocookie.net/gameofthrones/images/4/49/Battle_of_the_Bastards_08.jpg/revision/latest/scale-to-width-down/310?cb=20160615184845',
      enemy: [1, 2, 3],
      friends: [4, 5, 6, 7]
      },      
    { //1
      id: 2,
      name: 'Daenerys Targaryen',
      opis: `Daenerys ma tradycyjnie fioletowe oczy[3] i srebrno-złote włosy Targaryenów.[3][8][10] Jest szczupła i niska, ale mimo tego posiada pewną wytrzymałość ze względu na swoje trudne życiowe doświadczenia. Ma smukłe ciało,[3] z małymi piersiami. Dany jest sprytna i przebiegła, stanowcza i zdecydowana, lecz niedoświadczona. Nienawidzi uzurpatora, ponieważ oskarża go o śmierć rodziny i swoją tułaczkę po Wolnych Miastach. Z radością przyjęła wieść o jego śmierci i wojnie domowej w Siedmiu Królestwach. Mimo że została oddana Khalowi Drogo siłą, z czasem pokochała Dothraka. Obecnie darzy gorącym uczuciem Daaria Naharisa. Jest bardzo nieufna z powodu przepowiedni, według której czekają ją trzy zdrady: „jedna za krew, druga z miłości, a trzecia za złoto”. Główną jej słabością jest to, że musi bardzo polegać na wiedzy innych otaczających ją ludzi. Wierzyła w opowieści Viserysa o ich rodzinie, gdyż nie miała nikogo innego, kto by jej o tym opowiedział; była całkiem nieświadoma, że jej ojciec został uznany za szaleńca. Prawdę uświadomił jej dopiero ser Barristan Selmy. Słabością Daenerys jest to, że nigdy nie czytała żadnych książek o wychowywaniu smoków i nie jest pewna, jak rozwijać swoje umiejętności kontroli i dyscypliny nad nimi, nie wie jak wytrenować smoki, aby wykorzystały w pełni swój ognisty potencjał. Martwi się, że jak jej smoki dorosną, nie będzie w stanie ich kontrolować lub używać do walki czy wykorzystać przy inwazji Westeros. Daenerys jest znakomitym jeźdźcem, ale nie posiada szczególnych umiejętności walki.`,
      imageUrl: 'https://vignette3.wikia.nocookie.net/gameofthrones/images/8/88/Daenerys_Targaryen_S7_Promo_Image.PNG/revision/latest/scale-to-width-down/310?cb=20170420191154',
      enemy: [0, 5],
      friends: [2, 3, 7]
    },
    { //2
      id: 3,
      name: `Eddard Stark`,
      opis: `Lord Eddard Stark (wym. /'ɛdɑɹd stɑɹk/) (w gronie przyjaciół nazywany Nedem) – lord Winterfell, namiestnik Północy i Królewski Namiestnik, przez krótki czas Lord Regent Królestwa. Był drugim synem lorda Rickarda Starka i jego żony lady Lyarry Stark. Mąż Catelyn Tully i ojciec piątki dzieci: Robba, Sansy, Aryi, Brana, Rickona. Został ścięty na rozkaz króla Joffreya I Baratheona przez królewskiego kata Ilyna Payne’a. W chwili rozpoczęcia akcji książki lord Eddard ma trzydzieści kilka lat i jest lordem Winterfell. Ma 5 dzieci.
      
      Posiada charakterystyczną dla rodu Starków urodę: pociągłą twarz, szare oczy i ciemne włosy. Oblicze Neda zdobi broda, zaczynająca robić się siwa. Nie jest bardzo przystojny ani wysoki.
      
      Wśród wielu ludzi uznawany był za zimnego człowieka, jednak w stosunku do rodziny odnosi się z miłością i serdecznością. Głęboko wierzy w Starych Bogów. Ma silnie zakorzenione poczucie honoru i sprawiedliwości. W przeciwieństwie do południowych lordów nie zatrudnia zawodowego kata, ale sam wymierza sprawiedliwość. Ze swoją ostrożnością stanowił pewnego rodzaju przeciwwagę dla porywczości Roberta. Był dobrym strategiem i wojownikiem.
      
      Nienawidził prowadzonej na południu gry o tron i wszystkich związanych z nią spiskami i układami.`,
      imageUrl: 'https://vignette2.wikia.nocookie.net/gameofthrones/images/9/9c/EddardStark.jpg/revision/latest/scale-to-width-down/307?cb=20110626030942',
      enemy: [0, 3, 7 ],
      friends: [1, 6]
    }
  ]
  
  form = new FormGroup({
    heroName: new FormControl('', [
      Validators.required,
      Validators.minLength(3)  
    ]),
    opisek: new FormControl(''),
    link: new FormControl(''),
    password: new FormControl('', Validators.required),
    enemy: new FormControl('', Validators.pattern(REGEX)),
    friends: new FormControl('', Validators.pattern(REGEX))
  });

  get heroName(){
    return this.form.get('heroName');
  }  

  dodaj(para){
    console.log(para)
  }

  model: any = {};
  addHero(){
    this.heroes.push(this.model)
    this.model = {}
  }

  deleteHero(i){
    this.heroes.splice(i, 1)
    console.log(i)
  }
  
  editHero(k){
    this.model = this.heroes[k].name
    
  }
}