

export class Job{
    private baslik: string;
    private notlar: string;
    private tarih: Date;
    private saat: Date;
    private alarm: boolean;
    private gun: string;
    public  key: string;
    gunler: string[] = ['Pzr', 'Pzt' , 'Sal' , 'Çrş' , 'Prş' , 'Cum' , 'Cmt' ];
    aylar: string[] = ['Oca', 'Şub' , 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'];
    static list: Array<Job> = new Array<Job>();

    constructor() {
    }
    ekle(baslik: string, notlar: string , tarih: Date , saat: Date , alarm: boolean){

        this.baslik = baslik;
        this.notlar = notlar;
        this.tarih = tarih;
        this.saat = saat;
        this.alarm = alarm;
    }
    getGun(){
      return this.gunler[new Date(this.tarih).getDay()];
    }
    getGunInt(){
        return new Date(this.tarih).getDate();
    }
    getAy(){
        return this.aylar[new Date(this.tarih).getMonth()];
    }
    getBaslik(){
        return this.baslik;
    }
    getNotlar(){
        return this.notlar;
    }
}
