### SONIC TX BOT

Sonic TX bot for adding more tx on chain

---

## BOT FEATURE

- Support PK and SEED
- Proxy Support
- Auto Check In
- Auto TX until 100 Times
- Auto Claim TX Milestone
- Auto Opening Mystery Box
- Support on testnet-v1

---

## PREREQUISITE

- Git
- Node JS > v18

---

## SETUP

1. Clone Project Repository
   ```bash
   git clone https://github.com/Rambeboy/SONIC-TX-BOT.git
   ```

2. Navigate to Project dir
   ```bash
   cd SONIC-TX-BOT
   ```

3. Install Dependencies
   ```bash
   npm install
   ```

4. Run
   ```bash
   cp accounts/account_tmp.js account.js && cp accounts/proxy_list_tmp.js proxy_list.js
   ```

- Fill up account.js `nano accounts/account.js` fill with your account private key

- Fill up proxy_list.js `nano accounts/proxy_list.js` fill with your proxy list

5. Run
   ```bash
   npm start
   ```

   ---

## CONFIGURATION

im adding config file for you to configure, open `src config/config.js` and adjust config. Here some configurable variables.

```js
export class Config {
  static sendAmount = 0.0001; //amount to send in sol
  static destAddress = addressList; //address destination list
  static maxRetry = 3; // max error retry for claiming
}
```

to configure destination address list, open `src config/address_list.js` adjust the list with yours. the bot will pick random destination address from that list to send token or it will send to its own wallet address.

---

## HOW TO UPDATE

to update just run `git pull` or if it failed because of unstaged commit, just run `git stash` and then `git pull`. after that do `npm install` or `npm update`.

---

## NOTE

Bot running using twister, so if you run multiple account maybe some account not showed on your terminal because it depens on your windows screen, but it still running. you can check on `app.log`.

---
