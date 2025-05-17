# Nostr Npub Generator

## วิธีใช้งาน

1. ติดตั้ง Node.js (แนะนำเวอร์ชัน 18 ขึ้นไป)
2. ติดตั้ง nostr-tools  
   ```sh
   npm install nostr-tools
   ```
3. รันโปรแกรม  
   ```sh
   node npub.mjs
   ```
4. ใส่ prefix ที่ต้องการเช่น `arm`  
   > **ข้อควรระวัง:**  
   > - ห้ามใช้ตัวพิมพ์ใหญ่  
   > - ห้ามใช้ตัว b, i, o, 1  
   > - ตัวอย่าง: `npub1arm...`

5. โปรแกรมจะสุ่มจนกว่าจะเจอ npub ที่ขึ้นต้นด้วย prefix ที่กำหนด  
   - ยิ่ง prefix ยาว จะใช้เวลานานขึ้น

## ตัวอย่างผลลัพธ์

```
Don't use capital letters, b, i, o, 1 in your prefix.
Enter desired prefix (after npub1): arm
Tried 10000 keys...
Tried 20000 keys...
Secret Key (nsec): nsec1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Public Key (npub): npub1armxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Tried: 23456 keys
```

## License
MIT