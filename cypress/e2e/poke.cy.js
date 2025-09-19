import * as data from "../helpers/default_data.json";
import * as login_page from "../locators/login_page.json";
import * as main_page from "../locators/main_page.json";
import * as trainer_page from "../locators/trainer_page.json";
import * as shop_page from "../locators/shop_page.json";
import * as pay_page from "../locators/pay_page.json";
import * as sms_page from "../locators/sms_page.json";
import * as final_page from "../locators/final_page.json"

describe('Проверка покупки нового аватара', function () {
    it('e2e тест на покупку нового аватара для тренера', function () {
         cy.visit('/');
         cy.get(login_page.login).type(data.login);
         cy.get(login_page.password).type(data.password);
         cy.get(login_page.login_button).click();
         cy.wait(2000);
         cy.get(main_page.trainer_page).click();
         cy.wait(2000);
         cy.get(trainer_page.shop).click();
         cy.wait(2000);
         cy.get(shop_page.buy_btn).first().click();
         cy.wait(2000);
         cy.get(pay_page.card).type(data.card);
         cy.get(pay_page.date).type(data.date);
         cy.get(pay_page.code).type(data.code);
         cy.get(pay_page.name).type(data.name);
         cy.get(pay_page.pay_btn).click();
         cy.wait(2000);
         cy.get(sms_page.sms).type(data.sms);
         cy.get(sms_page.payment).click();
         cy.contains('Покупка прошла успешно').should('be.visible');
         cy.get(final_page.back).click();
    });
});