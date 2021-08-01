module.exports = {
    name: 'ดูดวง',
    description: 'เปิดไพ่แล้วมาดูดวงกัน',

    execute(message, args) {
        var random = Math.floor(Math.random() * 21);
        switch (random) {
            case 0:
                message.channel.send('คุณได้ไพ่หมายเลข 0 "THE FOOL"\n' +
                    '"เด็กหนุ่มผู้มีอิสระ ไร้เดียงสา พร้อมจะผจญภัยไปยังโลกกว้าง ก้าวเดินไปยังหน้าผาอันตราย อย่างไม่หวั่นเกรง พร้อมสุนัขคู่ใจตัวน้อยที่พร้อมปกป้องระหว่างทาง"\n' +
                    'อ่านเพิ่มเติม : ' + "https://www.shitsuren-tarot.com/tarot/the-fool/");
                break;
            case 1:
                message.channel.send('คุณได้ไพ่หมายเลข 1 "THE MAGICIAN"\n' +
                    '"จอมเวทย์ผู้มีความสามารถในการเชื่อมระหว่างโลกและจักรวาล ผู้มีเข้าใจในธรรมชาติและความสามารถในการควบคุมผสาน สรรสร้าง ทุกสรรพสิ่งจาก ดิน น้ำ ลม ไฟ"\n' +
                    'อ่านเพิ่มเติม : ' + "https://www.shitsuren-tarot.com/tarot/the-magician/");
                break;
            case 2:
                message.channel.send('คุณได้ไพ่หมายเลข 2 "THE HIGH PRIESTESS"\n' +
                    '"ราชินีพระจันทร์ เทพธิดาผู้สามารถติดต่อกับโลกแห่งจิตวิญญาณและความจริง เป็นเจ้าลัทธิที่มีอำนาจลึกลับ ซับซ้อนของผู้หญิงซ่อนอยู่เบื้องหลังความไร้เดียงสา"\n' +
                    'อ่านเพิ่มเติม : ' + "https://www.shitsuren-tarot.com/tarot/the-high-priestess/");
                break;
            case 3:
                message.channel.send('คุณได้ไพ่หมายเลข 3 "THE EMPRESS"\n' +
                    '"จักรพรรดินีผู้เลอโฉม และมีความเป็นแม่สูง นั่งอยู่สวนป่าที่มีความอุดมสมบูรณ์ เธอพร้อมที่จะหล่อเลี้ยงและให้กำเนิดสรรพสิ่ง พร้อมที่จะดูแลคนของเธอเป็นอย่างดี"\n' +
                    'อ่านเพิ่มเติม : ' + "https://www.shitsuren-tarot.com/tarot/the-empress/");
                break;
            case 4:
                message.channel.send('คุณได้ไพ่หมายเลข 4 "THE EMPEROR"\n' +
                    '"จักรพรรดิผู้นิ่งสงบ การควบคุมคน ความนิ่ง ความมั่นคง ทำให้สามารถสยบโลกไว้ได้ด้วยอำนาจของตัวเอง ชายผู้มีความเป็นพ่อสูง พร้อมห่วงใยดูแลและปกป้อง"\n' +
                    'อ่านเพิ่มเติม : ' + "https://www.shitsuren-tarot.com/tarot/the-emperor/");
                break;
            case 5:
                message.channel.send('คุณได้ไพ่หมายเลข 5 "THE HIEROPHANT"\n' +
                    '"สังฆราช ผู้ศึกษาความรู้ ธรรมเนียมปฏิบัติ เป็นผู้นำด้านความเชื่อ ความศรัทธา ผู้เคร่งครัดในจารีต พร้อมที่จะถ่ายทอดความรู้ความเชื่อให้เหล่าศิษย์ทั้งหลาย"\n' +
                    'อ่านเพิ่มเติม : ' + "https://www.shitsuren-tarot.com/tarot/the-hierophant/");
                break;
            case 6:
                message.channel.send('คุณได้ไพ่หมายเลข 6 "THE LOVERS"\n' +
                    '"เรื่องราวของอดัม กับ อีฟ ในสวนอีเดน ที่พระเจ้าได้ให้ทั้งคู่เป็นคู่ครองกันและอยู่อย่างมีความสุข แต่งูก็ได้เสนอผลไม้แห่งความรู้ซึ่งเป็นผลไม้ต้องห้ามที่พระเจ้าได้ห้ามไว้  ถึงทางเลือกที่พวกเขาจะต้องเลือก"\n' +
                    'อ่านเพิ่มเติม : ' + "https://www.shitsuren-tarot.com/tarot/the-lovers/");
                break;
            case 7:
                message.channel.send('คุณได้ไพ่หมายเลข 7 "THE CHARIOT"\n' +
                    '"อัศวินรถม้าผู้ที่สามารถควบคุมรถม้าไปได้ด้วยพละกำลัง พร้อมมุ่งหน้าเข้าประจันข้าศึก โดยไม่เกรงกลัวต่อสิ่งใด "\n' +
                    'อ่านเพิ่มเติม : ' + "https://www.shitsuren-tarot.com/tarot/the-chariot/");
                break;
            case 8:
                message.channel.send('คุณได้ไพ่หมายเลข 8 "STRENGTH"\n' +
                    '"หญิงสาวลูบหัวและคางของสิงโตด้วยใบหน้ายิ้มอย่างสงบ ซึ่งสิงโตก็ยอมเธอ โดยที่เธอไม่จำเป็นต้องออกแรงใดๆ"\n' +
                    'อ่านเพิ่มเติม : ' + "https://www.shitsuren-tarot.com/tarot/strength/");
                break;
            case 9:
                message.channel.send('คุณได้ไพ่หมายเลข 9 "THE HERMIT"\n' +
                    '"นักพรตผู้ออกเดินทางปลีกวิเวกขึ้นเขาไปเพียงลำพัง ค้นหาตัวเอง และเพื่อมองโลกในมุมที่กว้างกว่า"\n' +
                    'อ่านเพิ่มเติม : ' + "https://www.shitsuren-tarot.com/tarot/the-hermit/");
                break;
            case 10:
                message.channel.send('คุณได้ไพ่หมายเลข 10 "WHEEL OF FORTUNE"\n' +
                    '"วงล้อแห่งโชคชะตา ที่กำลังหมุนไป ส่งผลให้ชีวิตนั้นหมุนตามไปด้วย"\n' +
                    'อ่านเพิ่มเติม : ' + "https://www.shitsuren-tarot.com/tarot/wheel-of-fortune/");
                break;
            case 11:
                message.channel.send('คุณได้ไพ่หมายเลข 11 "JUSTICE"\n' +
                    '"ผู้พิพากษาที่ตัดสินทุกอย่างด้วยความยุติธรรม มือขวาของเธอถือดาบพร้อมฟาดฟันตัดสิน มือซ้ายถือตาชั่งที่แสดงถึงความยุติธรรม เท่าเทียม ไม่โอนเอียง"\n' +
                    'อ่านเพิ่มเติม : ' + "https://www.shitsuren-tarot.com/tarot/justice/");
                break;
            case 12:
                message.channel.send('คุณได้ไพ่หมายเลข 12 "THE HANGED MAN"\n' +
                    '"ชายผู้ถูกห้อยหัว ให้ทรมาน แต่ท่าทางของเขากลับทำให้รู้ว่าเขาไม่เป็นไร ด้วยขาที่ขัดกันเป็นเลข 4 ซึ่งมีความหมายถึงความสมดุล สงบนิ่ง และแสงล้อมรอบหัวหมายถึงการตระหนักรู้"\n' +
                    'อ่านเพิ่มเติม : ' + "https://www.shitsuren-tarot.com/tarot/the-hanged-man/");
                break;
            case 13:
                message.channel.send('คุณได้ไพ่หมายเลข 13 "DEATH"\n' +
                    '"ยมทูตผู้มอบความตายแก่ทุกคนไม่เว้นแม้แต่จักรพรรดิ ได้เดินทางมาเพื่อจะมอบความตายให้แม่และเด็ก แต่ทว่าพระสังฆราชได้มาเจรจาให้หยุดยั้งไว้"\n' +
                    'อ่านเพิ่มเติม : ' + "https://www.shitsuren-tarot.com/tarot/death/");
                break;
            case 14:
                message.channel.send('คุณได้ไพ่หมายเลข 14 "TEMPERANCE"\n' +
                    '"เทวดาผู้ที่ยืนอยู่ตรงริมฝั่ง เท้าข้างนึงอยู่ในน้ำ เท้าข้างนึงอยู่บนพื้นดิน  กำลังทำการทดลองผสมน้ำจากถ้วยสองถ้วย ถ้วยนึงเย็น ถ้วยนึงร้อน เข้าด้วยกัน"\n' +
                    'อ่านเพิ่มเติม : ' + "https://www.shitsuren-tarot.com/tarot/temperance/");
                break;
            case 15:
                message.channel.send('คุณได้ไพ่หมายเลข 15 "THE DEVIL"\n' +
                    '"ปีศาจผู้ควบคุมให้คนสองคน ชายและหญิงมาผูกมัดกันด้วยโซ่ แต่ทว่าโซ่ที่มัดหลวมนี้อันที่จริงไม่ได้ผูกมัดทั้งสองคนไว้ แต่เป็นสิ่งที่อยู่ลึกลงไปในจิตใจที่ทำให้คนสองคนยังผูกติดกันอยู่"\n' +
                    'อ่านเพิ่มเติม : ' + "https://www.shitsuren-tarot.com/tarot/the-devil/");
                break;
            case 16:
                message.channel.send('คุณได้ไพ่หมายเลข 16 "THE TOWER"\n' +
                    '"หอคอยที่สร้างอยู่บนยอดเขา อันไม่มั่นคง โดนฟ้าผ่าพังทลายลงมา คนสองคนจึงต้องกระโดดหนีตาย ลงมาจากหอคอยนั้น โดยไม่แน่ใจว่าเบื้องล่างจะเป็นพื้นดิน หรือน้ำ"\n' +
                    'อ่านเพิ่มเติม : ' + "https://www.shitsuren-tarot.com/tarot/the-tower/");
                break;
            case 17:
                message.channel.send('คุณได้ไพ่หมายเลข 17 "THE STAR"\n' +
                    '"แสงจากดวงดาวอันสุกใส ส่องให้เห็น หญิงสาวที่ริมน้ำ เธอเทโหลใส่น้ำสองใบ ใบนึงเทไปบนพื้นดินก่อให้เกิดการกำเนิดต้นไม้มากมาย  ใบนึงเทลงในน้ำเพื่อเติมเต็มและก่อให้เกิดการหมุนเวียน"\n' +
                    'อ่านเพิ่มเติม : ' + "https://www.shitsuren-tarot.com/tarot/the-star/");
                break;
            case 18:
                message.channel.send('คุณได้ไพ่หมายเลข 18 "THE MOON"\n' +
                    '"แสงจากดวงจันทร์ ที่สะท้อนมาจากแสงอาทิตย์ ได้เปิดเผยความมืดมิดที่ปิดบังไว้ ความกังวล ความกลัว หลายสิ่งหลายอย่างที่เก็บซ่อนไว้ภายในกำลังจะเปิดเผยขึ้นมา"\n' +
                    'อ่านเพิ่มเติม : ' + "https://www.shitsuren-tarot.com/tarot/the-moon/");
                break;
            case 19:
                message.channel.send('คุณได้ไพ่หมายเลข 19 "THE SUN"\n' +
                    '"ดวงอาทิตย์อันสดใส ส่องแสงสว่างไปยังทุกแห่งหน เด็กน้อยผู้นำความร่าเริงถือธงสีแดงบนม้ากำลังเข้ามา เบื้องหลังเป็นดอกทานตะวันที่บ่งบอกถึงความหวัง"\n' +
                    'อ่านเพิ่มเติม : ' + "https://www.shitsuren-tarot.com/tarot/the-sun/");
                break;
            case 20:
                message.channel.send('คุณได้ไพ่หมายเลข 20 "JUDGEMENT"\n' +
                    '"วันพิพากษา เหล่าผู้วายชนม์ที่ลุกขึ้นมาเพื่อรอฟังเสียงแตรของเทพกาเบรียลในวันพิพากษา ใครจะได้ขึ้นสวรรค์ ใครจะตกนรกขึ้นอยู่กับสิ่งที่ได้ทำมา"\n' +
                    'อ่านเพิ่มเติม : ' + "https://www.shitsuren-tarot.com/tarot/judgement/");
                break;
            case 21:
                message.channel.send('คุณได้ไพ่หมายเลข 21 "THE WORLD"\n' +
                    '"หญิงสาวที่เต้นระบำอยู่บนฟ้าอย่างร่าเริง โดยมีวงแหวนแห่งความสำเร็จล้อมรอบอยู่  สัญลักษณ์ตรงมุมทั้งสี่มุม แทนธาตุทั้งสี่ธาตุและหมายถึงไพ่ทั้งสี่ชนิด เหรียญ ไม้ ดาบ ถ้วย"\n' +
                    'อ่านเพิ่มเติม : ' + "https://www.shitsuren-tarot.com/tarot/the-world/");
                break;
        }
    },
};