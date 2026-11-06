حزمة تحويل تطبيق الكميل HTML إلى APK عبر GitHub Actions

الملفات:
- assets/index.html: ملف التصميم الأصلي كما هو.
- lib/main.dart: غلاف Flutter يعرض ملف HTML داخل التطبيق.
- pubspec.yaml: اعتماد WebView وإضافة ملف HTML للأصول.
- .github/workflows/build-apk.yml: بناء APK تلقائياً.

طريقة الاستخدام:
1) افتح مستودع alkumail في GitHub.
2) استبدل محتويات lib/main.dart بهذا الملف.
3) استبدل pubspec.yaml بهذا الملف.
4) ارفع assets/index.html داخل مجلد assets.
5) استبدل .github/workflows/build-apk.yml بهذا الملف.
6) انتقل إلى Actions وشغّل Build Alk umail APK، أو انتظر البناء بعد رفع الملفات.
7) افتح عملية البناء الناجحة ثم نزّل Artifact باسم Alk umail-APK.

ملاحظة: الملف الأصلي يعتمد على Tailwind وFont Awesome وخطوط Google عبر الإنترنت، لذلك يلزم اتصال الإنترنت حتى تظهر هذه الموارد الخارجية بصورة كاملة.
