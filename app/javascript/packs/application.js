// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//= require jquery
//= require jquery_ujs
import Rails, { formSubmitButtonClick } from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "bootstrap"
import JQuery from 'jquery';

window.$ = window.JQuery = JQuery;

Rails.start()
Turbolinks.start()
ActiveStorage.start()

import {changeActiveTabs} from "../channels/active_tab"
import { lightDarkChanger } from "../channels/light-dark"



document.addEventListener('turbolinks:load', () => {
    changeActiveTabs();
    lightDarkChanger();



});
