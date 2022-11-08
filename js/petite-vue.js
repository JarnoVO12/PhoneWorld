import { createApp } from 'https://unpkg.com/petite-vue?module';

createApp({
    name: "Select a phone",
    storage: "",
    ram: "",
    weight: "",
    ipc: "",
    screen: "",
    refresh: "",
    battery: "",
    price: "",

    name2: "Select a phone",
    storage2: "",
    ram2: "",
    weight2: "",
    ipc2: "",
    screen2: "",
    refresh2: "",
    battery2: "",
    price2: "",

    ZFlip4(){
        this.name = "Samsung Galaxy Z Flip 4";
        this.storage = "256 GB";
        this.ram = "8 GB";
        this.weight = "187 g";
        this.ipc = "IP68";
        this.screen = "6,7 inches";
        this.refresh = "120 Hz";
        this.battery = "3700 mAh";
        this.price = "€1.149";

        phoneAnimation1();
    },
    ZFlip4_2(){
        this.name2 = "Samsung Galaxy Z Flip 4";
        this.storage2 = "256 GB";
        this.ram2 = "8 GB";
        this.weight2 = "187 g";
        this.ipc2 = "IP68";
        this.screen2 = "6,7 inches";
        this.refresh2 = "120 Hz";
        this.battery2 = "3700 mAh";
        this.price2 = "€1.149";

        phoneAnimation2();
    },

    iphone14(){
        this.name = "Apple iPhone 14";
        this.storage = "256 GB";
        this.ram = "4 GB";
        this.weight = "172 g";
        this.ipc = "IP68";
        this.screen = "6,1 inches";
        this.refresh = "60 Hz";
        this.battery = "3279 mAh";
        this.price = "€1.149";

        phoneAnimation1();
    },
    iphone14_2(){
        this.name2 = "Apple iPhone 14";
        this.storage2 = "256 GB";
        this.ram2 = "4 GB";
        this.weight2 = "172 g";
        this.ipc2 = "IP68";
        this.screen2 = "6,1 inches";
        this.refresh2 = "60 Hz";
        this.battery2 = "3279 mAh";
        this.price2 = "€1.149";

        phoneAnimation2();
    },

    OnePlus10Pro(){
        this.name = "OnePlus 10 Pro";
        this.storage = "256 GB";
        this.ram = "12 GB";
        this.weight = "200 g";
        this.ipc = "IP68";
        this.screen = "6,7 inches";
        this.refresh = "120 Hz";
        this.battery = "5000 mAh";
        this.price = "€989";

        phoneAnimation1();
    },
    OnePlus10Pro2(){
        this.name2 = "OnePlus 10 Pro";
        this.storage2 = "256 GB";
        this.ram2 = "12 GB";
        this.weight2 = "200 g";
        this.ipc2 = "IP68";
        this.screen2 = "6,7 inches";
        this.refresh2 = "120 Hz";
        this.battery2 = "5000 mAh";
        this.price2 = "€989";

        phoneAnimation2();
    }

}).mount();