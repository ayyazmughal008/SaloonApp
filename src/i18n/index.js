import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nManager } from 'react-native';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    ar: {
        translation: {
            'Nearby Service': 'خدمة قريبة',
            'Find and book Barber, beauty, Salon & Spa service anywhere, anytime':
                'ابحث واحجز خدمة الحلاق والتجميل والصالون والسبا في أي مكان وفي أي وقت',
            'Service for Male & Female': 'خدمة للذكور والإناث',
            'Find and book services for both male and female nearby your location':
                'البحث وحجز الخدمات لكل من الذكور والإناث بالقرب من موقعك',
            'Style that fit your lifestyle': "أسلوب يناسب نمط حياتك",
            'Choose special offers and packages that fir your lifestyle':
                "اختر العروض والباقات الخاصة التي تناسب نمط حياتك",
            "NEXT": "التالي",
            "GET STARTED": "البدء", 
            "Hello, nice to meet you":'مرحبا سعدت بلقائك',
            'Join our Community!':"انضم إلى مجتمعنا!",
            'Phone Number':'رقم التليفون',
            'By creating an account, you agree to our':"من خلال إنشاء حساب ، فإنك توافق على",
            'Terms of Services':"شروط الخدمة",
            'and':'و',
            'Privacy Policy':'سياسة الخصوصية',
            'LOGIN':"تسجيل الدخول",
            'Don\'t have an account?':"ليس لديك حساب؟",
            'Register':"يسجل",
            'Phone Verification':"",
            'Enter your OTP code':"",
            'Resend code in':"",
            '10 seconds':"",
            'Profile Information':"",
            'Full Name':"",
            'Date of Birth':"",
            'Gender':"",
            'REGISTER':"",
            'Already Registered?':"",
            'Login':"",
            'Select Gender':"",
            'DONE':"",
            'Please choose the gender':"",
            'Upcoming Bookings':"",
            'Book Again':"",
            'Favorites':""
        },
    },
    iw_: {
        translation: {
            'Nearby Service': 'שירות בקרבת מקום',
            'Find and book Barber, beauty, Salon & Spa service anywhere, anytime':
                'מצא והזמין שירותי ספר, יופי, סלון וספא בכל מקום ובכל זמן',
            'Service for Male & Female': 'שירות לגברים ולנשים',
            'Find and book services for both male and female nearby your location':
                'מצא והזמין שירותים עבור גברים ונשים כאחד בקרבת מיקומך',
            'Style that fit your lifestyle': "סגנון שמתאים לאורח החיים שלך",
            'Choose special offers and packages that fir your lifestyle':
                "בחרו הצעות וחבילות מיוחדות שמתאימות לאורח החיים שלכם",
            "NEXT": "הַבָּא",
            "GET STARTED": "להתחיל",
            "Hello, nice to meet you":'שלום נעים להכיר אותך',
            'Join our Community!':"הצטרף לקהילה שלנו!",
            'Phone Number':'מספר טלפון',
            'By creating an account, you agree to our':"על ידי יצירת חשבון, אתה מסכים שלנו",
            'Terms of Services':"תנאי השירות",
            'and':'ו',
            'Privacy Policy':'מדיניות פרטיות',
            'LOGIN':"התחברות",
            'Don\'t have an account?':"אין לך חשבון?",
            'Register':"הירשם",
            'Phone Verification':"",
            'Enter your OTP code':"",
            'Resend code in':"",
            '10 seconds':"",
            'Profile Information':"",
            'Full Name':"",
            'Date of Birth':"",
            'Gender':"",
            'REGISTER':"",
            'Already Registered?':"",
            'Login':"",
            'Select Gender':"",
            'DONE':"",
            'Please choose the gender':"",
            'Upcoming Bookings':"",
            'Book Again':"",
            'Favorites':""
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        compatibilityJSON: 'v3',
        resources,
        lng: I18nManager.isRTL ? ('ar' && 'iw_') : 'en',
        keySeparator: false, // we do not use keys in form messages.welcome
        //fallbackLng: "en",
        interpolation: {
            escapeValue: false, // react already safes from xss
        },
        react: {
            useSuspense:false,
         }
    });

export default i18n;