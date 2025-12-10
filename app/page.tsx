'use client'

import Image from 'next/image'
import Header from '@/components/Header'
import WhatsAppButton from '@/components/WhatsAppButton'
import SectionWrapper from '@/components/SectionWrapper'
import Accordion from '@/components/Accordion'
import TestimonialsSlider from '@/components/TestimonialsSlider'

// Image paths - using images from public/siteImages
const teamMeetupImages = [
  '/siteImages/תמונות לאתר/תמונות מפגש צוות/IMG_6246.JPG',
  '/siteImages/תמונות לאתר/תמונות מפגש צוות/IMG_6247.JPG',
  '/siteImages/תמונות לאתר/תמונות מפגש צוות/IMG_6248.JPG',
  '/siteImages/תמונות לאתר/תמונות מפגש צוות/IMG_6251.JPG',
]

const competitiveTeamImage = '/siteImages/תמונות לאתר/הצוות התחרותי/IMG_0056.JPG'

const beforeAfterImages = [
  { 
    src: '/siteImages/תמונות לאתר/תמונות שינוי/3db4be49-36e0-4400-af92-13c62739e3e8.JPG',
    caption: 'ירידה של 12 ק"ג ושיפור משמעותי במדדי הדם.'
  },
  { 
    src: '/siteImages/תמונות לאתר/תמונות שינוי/61A4DCCA-E08C-4BE6-9DCB-A687E4FB4A75.JPG',
    caption: 'עלייה של 8 ק"ג מסת שריר נקייה ב-10 חודשים.'
  },
  { 
    src: '/siteImages/תמונות לאתר/תמונות שינוי/a92265e2-1df5-4b8f-97f4-198cc478a040.JPG',
    caption: 'הכנה מושלמת לתחרות - מקום ראשון בקטגוריה.'
  },
  { 
    src: '/siteImages/תמונות לאתר/תמונות שינוי/d2bd7173-8616-48d5-9edf-5ebf89a4f5c4.JPG',
    caption: 'שיפור דרמטי בכוח ובמסה תוך 6 חודשים.'
  },
  { 
    src: '/siteImages/תמונות לאתר/תמונות שינוי/BEFORE & AFTER.PNG',
    caption: 'חיטוב מושלם עם שמירה על מסת שריר.'
  },
  { 
    src: '/siteImages/תמונות לאתר/תמונות שינוי/BEFORE & AFTER - 1.PNG',
    caption: 'שיפור מדדי בריאות והרגשה כללית מעולה.'
  },
  { 
    src: '/siteImages/תמונות לאתר/תמונות שינוי/BEFORE & AFTER(1).PNG',
    caption: 'תוצאות מרשימות של לקוחות נוספים.'
  },
]

const posingTraineeImages = [
  '/siteImages/תמונות לאתר/תמונות מתאמני פוזינג/09801192-ef01-4aed-b1ea-617b101debae.jpg',
  '/siteImages/תמונות לאתר/תמונות מתאמני פוזינג/1a3b3c50-4f07-48f1-849d-5bcee6ccc5a0.JPG',
  '/siteImages/תמונות לאתר/תמונות מתאמני פוזינג/4c908ee1-2afe-499c-8dba-dea6d5a0a853.jpg',
]

// Data arrays for easy extension
const transformationData = beforeAfterImages

const howItWorksData = [
  {
    title: 'תוכנית הליווי ופגישות הייעוץ – איפיון התחלתי',
    content: 'מיד לאחר ההרשמה לתוכנית, אשלח לך שאלון אישי מפורט / נקיים פגישה פרונטלית. שם נכיר את המטרה שלך, סדר היום, מצב בריאותי ורמת ניסיון – כדי לתאם ציפיות ולהתאים תוכנית שיושבת עליך בול, כמו כפפה ליד.',
  },
  {
    title: 'התאמת התוכניות – אימונים מותאמים אישית',
    content: 'תקבל תוכנית אימונים מותאמת אישית שמתחשבת בזמן שלך, בציוד שיש לך, ובפציעות אם קיימות. נשים דגש על פרופורציות נכונות ואסתטיות בין שרירי הגוף. התוכנית תכלול הסברים מפורטים, זמני מנוחה, שיטות אימון שונות וסרטוני הדגמה לכל תרגיל.',
  },
  {
    title: 'תזונה – תפריט מדויק ומגוון',
    content: 'ארכיב עבורך תפריט תזונה מגוון ומותאם אישית, עם מאזן מדויק בין אבות המזון, מינרלים וויטמינים, ובמידת הצורך גם התאמת פרוטוקול תוספי תזונה בהתאם לבדיקות דם. כמובן שהתפריט מתחשב בסדר היום שלך, ברגישויות ובכל מגבלה אחרת.',
  },
  {
    title: 'ליווי אישי ומעקב צמוד + קהילה',
    content: 'תהיה לך זמינות מירבית לשאלות, תמיכה ומוטיבציה, יחד עם מעקב תדיר אחר ההתקדמות בעזרת ימי עדכון / פגישות עדכון חודשיות בזום. בנוסף, תקבל גישה לקבוצת ווצאפ של צוות המתאמנים – קהילה חזקה עם טיפים, ערך, דיונים ואימונים משותפים.',
  },
]

const testimonialsData = [
  {
    name: 'מאליק דעיס',
    goal: 'ירידה במשקל וחיטוב',
    quote: 'תודה עמי נועם בזכותך הצלחת לרדת במשקל מ114 ל 97 הצלחתי לראות שרירים אחרי שירדתי במשקל תודה מכל הלב ❤',
  },
  {
    name: 'חנניה גרינברג',
    goal: 'עליה במסה ושמירה על חיטוב',
    quote: 'לאחרונה שאני רואה את המשקל גוף עולה ואתה הגוף נשאר חטוב ולאט לאט מתחיל להרגיש מה זה מסה ומה זה פיתוח גוף. אני שם לב גם להבדלים בין מאמנים אחרים אילך הרבה יותר דיבור בגובה העיניים תמיכה מתי שצריך אימונים משותפים ורמה מקצועית בלי לחפף.',
  },
  {
    name: 'תומא כהנא',
    goal: 'תהליך מקצועי ומדויק',
    quote: 'התהליך הזה הוא מה זה לא לכל אחד, חזן לא מתפשר על כלום. הוא דורש ממך הכל, ואם אתה לא מוכן לתת 100%, פשוט באמת, אל תבוא. עם זאת, אם אתה מוכן לתת את מה שצריך, אתה תגיע למעבר כל מה שאתה חושב שאפשרי בשבילך.',
  },
  {
    name: 'טוביה גרינברג',
    goal: 'הגעה לרמה גבוהה',
    quote: 'בזכותו הגעתי לרמה ממש גבוהה שלא האמנתי שאני אגיע אליה בגיל כזה (16/17) גם ברמת הביצועים וגם ברמה המנטלית. הוא מקצוען אמיתי, מהטובים שיש בארץ, עם ידע ברמה ממש גבוהה. הוא גם יודע לתת יחס אישי, ותמיד רואה את התמונה הגדולה.',
  },
  {
    name: 'אביעד קצויו',
    goal: 'שינוי בחיים',
    quote: 'עברו רק 3 חודשים ואני מרגיש שהחיים שלי אשכרה השתנו מקצה לקצה בזכותך. אני נראה טוב יותר, גדול יותר, בריא הרבה יותר, ומקבל מחמאות מאחרים ואין שמח ממני!',
  },
  {
    name: 'יעקב איצר',
    goal: 'שיפור ביטחון עצמי',
    quote: 'אתה פשוט קוסם אחי. הצלחת להביא אותי לשינוי פסיכי שלא חשבתי שאוכל להגיע. לקחת אותי הרמת לי את הבטחון לשמיים אני הולך עם האף מורם בשנה האחרונה וזה באמת בזכותך.',
  },
  {
    name: 'שלמה בן דוד',
    goal: 'תוצאות מעבר לציפיות',
    quote: 'בתהליך שלי עם חזן הגעתי לתוצאות שלא דמיינתי, שירות וליווי מקצועי ברמה הכי גבוהה. למי שמוכן לתת 100% מעצמו ולקבל 100% חזן הוא האיש בשבילו.',
  },
  {
    name: 'חביב נתנאל',
    goal: 'ליווי אישי ותמיכה',
    quote: 'החוויה שלי מהתהליך היא מאוד חיובית! נועם מבחינתי הוא לא רק מאמן הוא כבר אח. הוא מאוד מאוד קשוב ונותן מעצמו בכל שעה למען האנשים גם שהוא חולה או בחופשה.',
  },
  {
    name: 'יאיר כהן',
    goal: 'ליווי מותאם אישית',
    quote: 'הליווי היה ממש מותאם לי מההתחלה, נועם עבר איתי על כל פרט רלוונטי. היה קשוח ומקפיד אבל עם קצת מקום לנשום כשצריך, בסוף הביא את התוצאות שרציתי לגמרי ויצאתי עם הרבה כלים וידע לחיים.',
  },
  {
    name: 'מוריה נחום כהן',
    goal: 'פתרון בעיות אכילה',
    quote: 'אתה מאמן שנותן הכול גם כשלא רואים במציאות הכול, נותן את היחס המקסימלי שאפשר להביא. לי ספציפית היה בעיה קשה עם האוכל ואתה פשוט פתרתה לי אותה. אין לי מושג איך עשיתה את זה באמת שאתה מורה בשבילי.',
  },
  {
    name: 'לירון ברקן',
    goal: 'יחס אישי ותוכניות מפורטות',
    quote: 'יחס אישי ברמה מאוד גבוהה, כל הזמן פנוי לשאלות ונותן מענה לכל דבר ועניין. בין אם זה התוכנית תזונה ובין אם זה התוכנית אימונים - הכל היה מושקע ומפורט לפרטי פרטים ומשהו שהיה נוח וקל להתמיד בו ובהחלט רואים תוצאות.',
  },
  {
    name: 'לין לוי',
    goal: 'ידע מקצועי וזמינות',
    quote: 'נועם חזן היקר מאמן ומלווה מהטובים שיש בארץ, יש לו ידע ושיטות שאי אפשר למצוא באף מקום ומעל הכל הזמינות והעזרה ברמה אחרת. מומלץ בחום 💪🏻',
  },
  {
    name: 'אליהו אבוזגלו',
    goal: 'ליווי מעולה 24/7',
    quote: 'נועם רק רציתי להגיד תודה רבה לך אתה מאוד עוזר לי בהתקדמות ואני חושב שלכל אחד שיקח אותך הוא התקדם איתך בצורה הכי טובה שיש. הלווי שלך מעולה נותן מענה 24/7 לכל שאלה שצריך והכי חשוב הנוחות ❤🙏',
  },
  {
    name: 'אדל אמסילי',
    goal: 'שינוי פיזי ומנטלי',
    quote: 'תודה תודה באמת על כל התקופה הזו, עזרת לי כלכך ולא רק בעניין הפיזי. עברתי באמת תהליך עם עצמי בזכותך ושיניתי את כל הגישה כלפי הספורט, האימונים, משמעת עצמית והסתכלות על עצמי בצורה שונה, וזה לגמרי בזכותך!!',
  },
  {
    name: 'אילי אלמלם',
    goal: 'תמיכה מעבר למאמן',
    quote: 'הליווי שלי עם נועם היה מדהים, עם מלא מכשולים שהגיעו והיו לי בדרך, נועם תמיד ידע לנתק את ההגדרה "מאמן" ולהתחיל להתנהג כמו אח שלי. תמיד רצה והיה שם בשבילי, הוריד לי המון דאגות ותמך בי לאורך כל הדרך.',
  },
  {
    name: 'רן סרלין',
    goal: 'הגשמת חלום',
    quote: 'באתי אלייך אחרי כמה מאמנים שלא באמת ראיתי מהם תוצאות ובאמת היית התקווה האחרונה שלי אחי. עוד מעט הליווי של השנה מסתיים ואני אקח לעוד שנה! כל שבוע אני רק רואה תוצאות ממך. פעם הגוף שיש לי היום היה בגדר חלום אחי, הגשמת לי את החלום.',
  },
  {
    name: 'נועם גיבלי',
    goal: 'ליווי ברמה גבוהה',
    quote: 'למאמן מספר אחת!! תודה על ליווי אשש, רמה גבוהה ושינוי מטורףף. כוכב שאין כמותו, רמה ואיכות לא מהעולם הזה וזה לא סתם מאמן, זה מאמן שהוא מר ישראל. תודה רבה אחי על הכל ❤',
  },
  {
    name: 'נריה אביטל',
    goal: 'מאמן מספר אחת',
    quote: 'מאמן נאמבר וואן. ליווי צמוד להצלחה מרבית. מאמן שדואג תמיד להיות הכי טוב. לא מספיק לו מר ישראל. הוכחת שאפשר גם מהמקצוע הזה להנות.',
  },
  {
    name: 'עידו חזי',
    goal: 'שינוי במהלך הצבא',
    quote: 'אני מאוד ממליץ ומרוצה משבחרתי להגיע אליך. אני הגעתי במהלך הצבא, לא ידעתי כמה אתקדם בגלל זה, אבל נתת לי וודאות כלשהיא ודרך מסוימת. התפריט שלך מגוון, ולא פועל על פי ארוחה ככה וארוחה ככה, זאת אומרת שאני יכול לשחק ולסדר את זה בדרך שלי. בתור אדם שנמצא בצבא הפכתי להיות אדם אחר, עם משמעת, גוף מתקדם הרבה יותר ממה שהיה לי.',
  },
]

const faqData = [
  {
    title: 'האם כל התהליך מתנהל מרחוק, או שאנחנו נפגשים מדי פעם?',
    content: 'בתחילת התהליך אני מציג לך שתי אפשרויות – אונליין או פרונטלי – ואתה בוחר מה מתאים לך. מעבר לכך, אני נוהג לבצע אימונים משותפים עם קהילת המתאמנים בתדירות גבוהה, כך שבכל מקרה סביר מאוד שניפגש לפחות פעם אחת ולעשות אימון יחד בחדר הכושר.',
  },
  {
    title: 'מה אם אין לי רקע באימונים בכלל?',
    content: 'התוכנית מפורטת ומוסברת באופן מדויק עד לפרטים הכי קטנים, כך שגם אם זו הפעם הראשונה שלך בחדר הכושר – סביר שתבצע את התרגילים יותר נכון מ-90% ממי שכבר שם.',
  },
  {
    title: 'מה אם יש לי פציעה שמגבילה אותי באימונים?',
    content: 'כשאני מתאים לך את התוכניות, אני מתחשב בכל פציעה או מגבלה. בבחירת התרגילים, בחלוקת הנפח, בחיזוק השרירים המייצבים, ובמידת הצורך גם בהתאמת תוספי תזונה שיעזרו להחלמה מהירה.',
  },
  {
    title: 'האם כל אחד יכול להתכונן אצלך לתחרות?',
    content: 'הכנה לתחרות שונה מתהליך סטנדרטי של חיטוב או עלייה במסה, ודורשת אופי מאוד חזק ומאומן. אני נותן למתאמנים שלי את כל הכלים לבנות אופי כזה, אבל לפעמים צריך קצת זמן "להבשיל" לפני שנכנסים להכנה תחרותית מלאה.',
  },
  {
    title: 'האם יש מישהו שלא הגיע איתך למטרה?',
    content: 'היו מקרים של אנשים שלא עקבו אחרי ההנחיות – ואז גם לא הגיעו למטרה. מעולם לא קרה שמישהו עקב אחרי ההנחיות ולא הגיע למה שהצבנו. ואם זה יקרה? אני אלווה אותו בחינם עד שהוא יגיע למטרה. אבל זה לא יקרה – כי הכל עובד לפי מדע מאוד מדויק.',
  },
  {
    title: 'איך אני שומר על התוצאות אחרי שמסתיים התהליך?',
    content: 'במהלך התהליך אני דואג להסביר לך מה עומד מאחורי כל צעד והנחיה, כדי שתבין למה אתה עושה מה שאתה עושה ואיך זה מקדם אותך. בנוסף, אתה מקבל קובץ מבוא מסודר עם דגשים חשובים בעולם הכושר, שילכו איתך תמיד וישאירו אותך עם הידע גם אחרי שנגמר הליווי.',
  },
]

const contactSteps = [
  'אתה משאיר פרטים בתיבה למטה או שולח הודעה בווצאפ.',
  'אני באופן אישי חוזר אליך לתיאום שיחת איפיון ובדיקת התאמה לתוכנית.',
  'אם אנחנו מחליטים ללכת על זה – אתה מקבל את השאלון האישי לווצאפ ועונה עליו.',
  'משם, אתה מקבל את כל התוכניות, לווי צמוד – ומתחילים את התהליך.',
]

export default function Home() {
  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleWhatsApp = () => {
    window.open('https://wa.me/0000000000', '_blank')
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      notes: formData.get('notes'),
    }
    console.log('Form submitted:', data)
    alert('תודה! פרטיך התקבלו. נחזור אליך בהקדם.')
    e.currentTarget.reset()
  }

  return (
    <main className="min-h-screen">
      <Header />
      <WhatsAppButton />

      {/* Hero Section */}
      <SectionWrapper id="hero" className="pt-32 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Team Hazan – ייעוץ כושר ותזונה בהובלת מר ישראל לשנת 2023
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-accent">
              הסטנדרט כאן אחר.
            </h2>
            <p className="text-lg text-gray-300">
              עליה במסת השריר | הכנה לתחרות | פיתוח גוף | עיצוב וחיטוב הגוף | שיפור מדדים בריאותיים
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleWhatsApp}
                className="px-8 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
              >
                מעדיף לדבר?
              </button>
              <button
                onClick={() => handleScrollTo('#how-it-works')}
                className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent hover:text-white transition-colors"
              >
                איך זה עובד?
              </button>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden aspect-square shadow-2xl">
            <Image
              src={competitiveTeamImage}
              alt="Team Hazan"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Gallery Section - 4 Hazan Images */}
      <SectionWrapper id="gallery" className="bg-slate-800 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">הצוות</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {teamMeetupImages.map((src, index) => (
            <div
              key={index}
              className="relative aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <Image
                src={src}
                alt={`Team Hazan ${index + 1}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* TODO: Add caption */}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Results Section */}
      <SectionWrapper id="results" className="bg-slate-900">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">תוצאות של לקוחות</h2>
          <p className="text-lg text-gray-300">כמובן שאלו לא סתם דיבורים באוויר, יש גם קבלות.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transformationData.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-blue-900/50 transition-shadow border border-slate-700"
            >
              <div className="relative aspect-square">
                <Image
                  src={item.src}
                  alt={`תוצאות ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
              {/* <div className="p-4">
                <p className="text-gray-200">{item.caption}</p>
              </div> */}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* How It Works Section */}
      <SectionWrapper id="how-it-works" className="bg-slate-800">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">איך זה עובד?</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <Accordion items={howItWorksData} />
          <div className="mt-12 bg-blue-900/30 border-r-4 border-accent p-6 rounded-lg">
            <p className="text-lg text-gray-200 italic">
              אחרי 7 שנות ניסיון, חקר, ניסוי וטעייה – מצאתי את הנוסחה. זה פשוט עובד, כמו תרגיל מתמטי.
            </p>
          </div>
        </div>
      </SectionWrapper>

      {/* About Section */}
      <SectionWrapper id="about" className="bg-slate-900">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">על עצמי</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6 text-gray-200 leading-relaxed">
            <p>
              כמו הרבה אחרים, גם אני בילדות ספגתי המון ביקורת מהסביבה בנוגע למראה החיצוני שלי.
              בסופו של דבר, זה חדר אליי והשפיע על הביטחון העצמי שלי.
            </p>
            <p>
              הייתי ילד מעט שמנמן והרבה יותר מדי ביקורתי כלפי עצמו – תכונה שגרמה לי עם הזמן לפתח הפרעות אכילה קשות,
              שהביאו אותי לאנורקסיה ותת משקל קיצוני.
            </p>
            <p>
              כשהבנתי שהשלב הבא הוא להיכנס לאישפוז ולהכניס את המזון שהגוף שלי צריך דרך עירוי,
              החלטתי שאני מוכרח לשים לזה סוף.
            </p>
            <p>
              לימים התגברתי על הפרעות האכילה שלי ועזרתי לעשרות מלקוחותיי להתגבר עליהן גם.
              זכיתי במקום הראשון באליפות הארץ בפיתוח גוף, וכרגע אני מתחרה פעיל ומייצג את ישראל בתחרויות שונות בעולם.
            </p>
            <p>
              כיום, החזון והשליחות שלי הם לסייע לכמה שיותר אנשים להגשים את עצמם
              ולעזור להם לקחת את הגוף שלהם לקצה – שהם יסתכלו במראה ופשוט לא יאמינו למראה עיניהם.
              זה פשוט גורם לי לישון טוב יותר בלילה (:
            </p>
            <p>
              עזרתי כבר ללמעלה מ-600 מתאמנים עם מטרות שונות להגיע לגוף החלומות שלהם.
              והיום, אחרי שחקרתי, למדתי וניסיתי כמעט הכל ב-7 שנות הניסיון שלי בתחום,
              אני יכול להגיד לך שמצאתי את הנוסחה.
            </p>
            <p className="font-semibold text-lg">
              זה פשוט עובד, כמו תרגיל מתמטי.
            </p>
            <button
              onClick={() => handleScrollTo('#contact')}
              className="mt-6 px-8 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg transition-colors shadow-lg"
            >
              אני רוצה להתחיל תהליך ליווי
            </button>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative rounded-2xl overflow-hidden aspect-square w-full shadow-xl">
              <Image
                src={competitiveTeamImage}
                alt="ישראל חזן"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Posing Section */}
      <SectionWrapper id="posing" className="bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">שיעורי פוזינג לקראת תחרות</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              שיעור פוזינג אחד אורך כ-40–60 דקות.
              בתחילת השיעור נעבור על מהו פוזינג תקני לפי כללי האיגוד הרשמי,
              איך מתבצע תהליך השיפוט ומה השופטים מחפשים לראות.
              נשים דגש על החוזקות שלך, על החולשות שלך, ועל איך להציג את הגוף שלך בצורה המחמיאה ביותר על הבמה.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>מעברים נכונים ונעימים בין הפוזות</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>איך להחזיק פוזה לאורך זמן</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>איך לנשום נכון בזמן הפוזה</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>איך לשדר ביטחון ונוכחות על הבמה</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>איך לבנות רוטינה אישית מ-0 או לחדד רוטינה קיימת</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent font-bold">•</span>
                  <span>איך להתמודד עם סיטואציות בלתי צפויות ולהגיע מוכן אליהן</span>
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {posingTraineeImages.map((src, index) => (
                <div key={index} className="relative rounded-lg aspect-square overflow-hidden shadow-md">
                  <Image
                    src={src}
                    alt={`תלמיד פוזינג ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <p className="text-gray-200 mb-8 leading-relaxed">
            בסיום השיעור אדריך אותך במדויק על מה לעבוד בבית ואיך,
            אסביר לך איך לשלוח לי עדכונים שבועיים בווצאפ,
            ונצלם תמונות על מנת לוודא התקדמות רציפה לאורך התהליך.
          </p>
          <div className="text-center">
            <button
              onClick={() => handleScrollTo('#contact')}
              className="px-8 py-3 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              אני מתכונן לתחרות – דבר איתי על פוזינג
            </button>
          </div>
        </div>
      </SectionWrapper>

      {/* Not For Everyone Section */}
      <SectionWrapper id="not-for-everyone" className="bg-slate-900">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-blue-900 to-slate-800 text-white rounded-2xl p-8 md:p-12 text-center shadow-xl border border-blue-800">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">הליווי אינו מתאים לכולם</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                אני לא מצפה ממך להגיע לתהליך עם ניסיון עבר או עם בסיס כלשהו.
                אבל אני כן מצפה ממך להיות שקוף איתי גם אם יהיו מעידות,
                להבין שכדי להשתנות צריך לשנות,
                ולהיות מוכן לעבוד קשה.
              </p>
              <p className="text-2xl font-semibold text-accent mt-6">
                אם תתן לי את ה-100% שלך – אני אתן לך 200%.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Testimonials Section */}
      <SectionWrapper id="testimonials" className="bg-slate-800">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">המלצות של מתאמנים</h2>
          <p className="text-lg text-gray-300">חוויות אישיות ממתאמנים שלי</p>
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <TestimonialsSlider testimonials={testimonialsData} />
        </div>
      </SectionWrapper>

      {/* FAQ Section */}
      <SectionWrapper id="faq" className="bg-slate-900">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">שאלות נפוצות</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <Accordion items={faqData} />
        </div>
      </SectionWrapper>

      {/* Contact Section */}
      <SectionWrapper id="contact" className="bg-slate-800">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">מה הולך לקרות עכשיו?</h2>
          </div>
          <div className="mb-12 space-y-4">
            {contactSteps.map((step, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <p className="text-gray-200 text-lg pt-1">{step}</p>
              </div>
            ))}
          </div>
          <form onSubmit={handleFormSubmit} className="bg-slate-900 rounded-xl p-8 shadow-lg space-y-6 border border-slate-700">
            <div>
              <label htmlFor="name" className="block text-gray-200 font-medium mb-2">
                שם מלא
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-200 font-medium mb-2">
                מספר טלפון
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-200 font-medium mb-2">
                אימייל
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="notes" className="block text-gray-200 font-medium mb-2">
                הערות נוספות (לא חובה)
              </label>
              <textarea
                id="notes"
                name="notes"
                rows={4}
                className="w-full px-4 py-3 bg-slate-800 border border-slate-600 text-white rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-4 bg-accent hover:bg-accent-light text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform"
            >
              שלחו לי פרטים על התוכנית
            </button>
            <p className="text-sm text-gray-400 text-center">
              מעדיף ווצאפ? לחץ על האייקון הצף בצד המסך.
            </p>
          </form>
        </div>
      </SectionWrapper>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 Team Hazan. כל הזכויות שמורות.</p>
        </div>
      </footer>
    </main>
  )
}

