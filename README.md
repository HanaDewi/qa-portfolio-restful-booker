# QA Automation Documentation — Restful Booker API 

Proyek ini berisi *framework* otomasi pengujian untuk **Restful Booker Hotel Booking API** menggunakan **Playwright (JavaScript)** dan **Postman/Newman**, serta terintegrasi dengan **GitHub Actions** (CI/CD).

## Informasi Proyek
| Field | Detail |
| --- | --- |
| **Application Under Test** | Restful Booker Hotel Booking API |
| **Base URL** | `https://restful-booker.herokuapp.com` |
| **Tools** | Playwright, Postman, Newman, GitHub Actions |
| **Author** | Hana Dewi Shoviyah — QA Engineer |

##  Pendekatan & Strategi Testing
Framework ini mengimplementasikan pengujian API secara komprehensif melalui dua *layer*:
1. **API Automation (Playwright):** Test coverage mendalam dengan *assertion* kode JS (11 Test Cases).
2. **API Automation (Postman):** Test collection visual dan HTML *report* eksekusi via Newman (16 Assertions).

Semua *test suite* berjalan secara otomatis di *pipeline* CI/CD (GitHub Actions) pada setiap *push* ke *branch* utama.

##  Ruang Lingkup (Scope)
Endpoint yang diuji mencakup seluruh siklus CRUD reservasi hotel:
* **Authentication:** `POST /auth`
* **Get Booking:** `GET /booking`, `GET /booking/:id`, `GET /booking?firstname=X`
* **Create Booking:** `POST /booking`
* **Update Booking:** `PUT /booking/:id`
* **Delete Booking:** `DELETE /booking/:id`

## Ringkasan Hasil Eksekusi (Test Execution Report)
* **Playwright:** 11 Test Cases **(100% Pass)**
* **Newman/Postman:** 16 Assertions **(100% Pass)**
* **Total Automation Points:** 27 Assertions terotomatisasi.

## Defect Log (Bug Report)
Selama proses *exploratory testing*, ditemukan 2 *defect* pada sistem:
1. **[DEF-001] Major / High:** `POST /booking` tidak memvalidasi urutan tanggal. *Booking* berhasil dibuat meskipun *checkin date* berada SETELAH *checkout date*.
2. **[DEF-002] Minor / Low:** `DELETE /booking/:id` mengembalikan HTTP 201 (Created), padahal seharusnya mengembalikan 200 OK atau 204 No Content sesuai standar REST convention.

---
*Dokumentasi lengkap termasuk Test Plan, Test Cases, dan Matrix Coverage tersedia secara lokal pada file dokumentasi internal QA.*
