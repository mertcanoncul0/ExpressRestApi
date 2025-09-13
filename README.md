# Express Rest API

Bu proje, Node.js ve Express.js kullanılarak geliştirilmiş bir RESTful API örneğidir. MongoDB veritabanı ile kullanıcı yönetimi ve kimlik doğrulama işlemleri gerçekleştirilir.

## Özellikler

- Kullanıcı kaydı ve girişi
- JWT veya cookie tabanlı kimlik doğrulama
- Kullanıcı veritabanı işlemleri (CRUD)
- Temiz ve modüler kod yapısı (controller, router, middleware, helper, db)
- TypeScript ile yazılmıştır

## Kurulum

1. **Depoyu klonlayın:**
   ```bash
   git clone <repo-url>
   cd ExpressRestApi
   ```
2. **Bağımlılıkları yükleyin:**
   ```bash
   npm install
   ```
3. **.env dosyasını oluşturun:**
   Proje kök dizininde bir `.env` dosyası oluşturun ve aşağıdaki örneğe göre doldurun:
   ```env
   MONGO_URI="mongodb://<kullanıcı>:<şifre>@<host>:<port>/<veritabani>?authSource=admin"
   COOKIE_NAME="my_cookie"
   SECRET="my_secret"
   ```
4. **Projeyi başlatın:**
   ```bash
   npm start
   ```
   Sunucu varsayılan olarak `http://localhost:8080` adresinde çalışacaktır.

## Kullanım

API endpoint'leri ve örnek istekler için `src/router` ve `src/controllers` klasörlerine göz atabilirsiniz.

## Geliştirici Notları

- Kodlar TypeScript ile yazılmıştır, derleme gerektirmez, `ts-node` ile doğrudan çalışır.
- Otomatik yeniden başlatma için `nodemon` kullanılır.
- Ortam değişkenleri `.env` dosyasından yüklenir.

## Katkı Sağlama

Pull request'ler ve issue'lar açıktır. Katkıda bulunmak için lütfen fork'layıp değişikliklerinizi gönderin.

## Lisans

ISC
