"use strict";

//Decalaring variables
const heading = document.querySelector(".heading");
const paragraph = document.querySelector(".paragraph");
const modal = document.querySelector(".modal");
const modalText = document.querySelector(".modal-text");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
const submit = document.querySelector(".submit");

//Paragraph texts for each age
const smallAge = `At this age, it's important to focus on your own personal growth and not just a relationship. Pursue your passions and interests, and make sure you're taking care of yourself emotionally and physically.Good luck and have fun with your life!😍😍`;

const age20 = `At 20 years old, it’s a great time to focus on your personal growth and development. It’s okay to not be in a relationship at this age and to enjoy the freedom and independence that comes with youth. Take advantage of this time to travel, try new things, and make meaningful connections with friends and family. When the time is right, you’ll know if you’re ready for a relationship.💖💖`;

const age21 = ` At age 21 years old, you're just starting to explore the world and figure out who you are. Don't feel like you need to be in a relationship to validate your life. Enjoy your freedom and take advantage of all the opportunities that come your way and you may find that you’re more suited to being single for now.💖💖`;

const age22 = `At age 22, you're in a great place to start exploring your options and figuring out what you want in life. If you’re not in a relationship, that’s okay. Don't feel pressured to start a relationship. Enjoy your freedom and invest in friendships and hobbies that bring you happiness.💖💖`;

const age23 = ` At age 23, you’re starting to gain more independence and confidence. You might feel like you need to settle down, but remember that a relationship shouldn't define your worth or happiness. Focus on your personal growth and when the time is right, the right relationship will come naturally.💖💖`;

const age24 = `At age 24, this is a great age to start thinking about what you want in a partner. Write down your must-haves and deal-breakers, and don't settle for less in a relationship. But, if you do happen to meet someone who sparks your interest, don't be afraid to give it a shot. Just make sure you communicate openly and honestly about what you both want from the relationship.💖💖`;

const age25 = `At age 25, you're in a great place to start thinking about what you want in a relationship and it’s a great time to reflect on what you want in a partner and what you bring to the table as a potential partner. Take the time to get to know yourself and what you're looking for in a partner. Don’t be afraid to take your time to find someone who aligns with your values and goals.💖💖`;

const age26 = `At age 26, you're gaining confidence and independence. Don't feel like you need to be in a relationship to validate your worth. Focus on your career and personal goals, and let a relationship develop organically. If you do find that special someone, just make sure you're both on the same page about what you want from the relationship and that you're ready for the commitment.💖💖`;

const age27 = `At age 27, this is a great age to evaluate your past relationships and what you want in a partner. Be honest with yourself and don't settle for anyone who doesn't align with your values and goals. You may be feeling a bit of pressure to settle down and be in a relationship. But, don't settle for just anyone! Make sure you find someone who you have a real connection with and who makes you truly happy.💖💖`;

const age28 = `At age 28, you're at a turning point in your life. If you're single, embrace it and focus on personal growth. If you're in a relationship, make sure it's supportive and fulfilling. Remember that the most important thing is to make sure you're ready for a relationship and that you've found someone who you genuinely connect with and who makes you happy. Good luck, and have fun!💖💖`;

const age29 = `At age 29, you're starting to gain more perspective and maturity. If you're not in a relationship, that's okay. You may start to feel like time is running out and you need to be in a relationship ASAP. But, don't settle for just anyone! Make sure you find someone who you have a real connection with and who makes you truly happy.  Good luck, and have fun!💖💖`;

const age30 = `At age 30, you may be more established in your career and ready to start a family. If you haven’t found someone to share your life with, don’t worry. There are plenty of people out there looking for a meaningful relationship, and there’s no rush to settle down. Focus on being happy with yourself and the right person will come along.💖💖`;

const age31 = `At age 31, you may start to feel like you're missing out on having someone to share your life with. But, don't settle for just anyone! Make sure you find someone who shares your values and goals and who you truly connect with.💖💖`;

const age32 = `At age 32, this is a great age to focus on self-improvement and personal growth. If you’re not married yet but you're in a relationship, make sure it's healthy and supportive and make sure you communicate openly and honestly about what you both want from the relationship. Lastly, it’s advisable not to stay long trying to perfect any relationship; it will be of benefit if you start having your children now.💖💖`;

const age33 = `At age 33, this is a time for reflection and introspection. You should be married by now and if not, that’s not bad. That doesn’t mean you that you won’t get a partner forever. Take your time to find the best one that suit you and if you're in a relationship, make sure it's fulfilling and healthy. Good luck!💖💖`;

const age34 = `At age 34, you might be at a crossroads in your life. If you're single, embrace your independence and focus on personal growth. Remember, you can’t be single for life. Take your time to find the best one that suit you and if you're in a relationship, make sure it's fulfilling and healthy. Good luck!💖💖`;

const age35 = `At age 35, you may be feeling the pressure to settle down and start a family. Remember, there’s no right or wrong timeline for finding love and starting a family. If you’re content being single, that’s great. If you’re looking for a relationship, don’t settle for anyone who doesn’t meet your standards. You deserve to be with someone who makes you happy.💖💖`;

const age36 = `At age 36, you may be feeling the pressure to settle down and start a family. Remember, there’s no right or wrong timeline for finding love and starting a family and this is a great time to evaluate your life goals and what you want in a relationship. Make sure the person you're with aligns with your values and supports your personal growth.💖💖`;

const age37 = `At this age,you may be starting to feel like you're running out of time to find someone to share your life with. But, don't settle for just anyone! Make sure you find someone who you have a real connection with and who makes you truly happy.💖💖`;

const age38 = age37;
const age39 = age37;
const age40 = `At this age, you’ve likely built a fulfilling life for yourself and have a lot to offer a potential partner. If you’re still searching for love, don’t give up. There are plenty of people out there looking for a meaningful relationship at any age. Keep an open mind and focus on building meaningful connections with others, and love may come naturally.💖💖`;

const age41 = age40;
const age42 = age40;
const age43 = age40;
const age44 = age40;
const age45 = `At age 45, you’ve likely accomplished a lot in your life and have a lot experience and wisdom to offer a potential partner. If you’re single, don’t worry. There are plenty of opportunities to find love and build a relationship later in life. Focus on being happy with yourself and the right person will come along.💖💖`;

//Functionality
const init = function () {
  const ageInput = Number(document.querySelector(".input").value);
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  heading.textContent = `#${ageInput}`;
};
const openModal = function () {
  const ageInput = Number(document.querySelector(".input").value);
  init();
  if (ageInput < 20 && ageInput > 14) {
    modalText.textContent = smallAge;
  } else if (ageInput == 20) {
    modalText.textContent = age20;
  } else if (ageInput === 21) {
    modalText.textContent = age21;
  } else if (ageInput === 22) {
    modalText.textContent = age22;
  } else if (ageInput === 23) {
    modalText.textContent = age23;
  } else if (ageInput === 24) {
    modalText.textContent = age24;
  } else if (ageInput === 25) {
    modalText.textContent = age25;
  } else if (ageInput === 26) {
    modalText.textContent = age26;
  } else if (ageInput === 27) {
    modalText.textContent = age27;
  } else if (ageInput === 28) {
    modalText.textContent = age28;
  } else if (ageInput === 29) {
    modalText.textContent = age29;
  } else if (ageInput === 30) {
    modalText.textContent = age30;
  } else if (ageInput === 31) {
    modalText.textContent = age31;
  } else if (ageInput === 32) {
    modalText.textContent = age32;
  } else if (ageInput === 33) {
    modalText.textContent = age33;
  } else if (ageInput === 34) {
    modalText.textContent = age34;
  } else if (ageInput === 35) {
    modalText.textContent = age35;
  } else if (ageInput === 36) {
    modalText.textContent = age36;
  } else if (ageInput === 37) {
    modalText.textContent = age37;
  } else if (ageInput === 38) {
    modalText.textContent = age38;
  } else if (ageInput === 39) {
    modalText.textContent = age39;
  } else if (ageInput === 40) {
    modalText.textContent = age40;
  } else if (ageInput === 41) {
    modalText.textContent = age41;
  } else if (ageInput === 42) {
    modalText.textContent = age42;
  } else if (ageInput === 43) {
    modalText.textContent = age43;
  } else if (ageInput === 44) {
    modalText.textContent = age44;
  } else if (ageInput === 45) {
    modalText.textContent = age45;
  } else {
    modalText.textContent =
      "Sorry advice is not availabe for your age group. Thanks for checking out😊 I love you more than you love garri😂😌";
  }
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

//Adding event handler to each buttons
submit.addEventListener("click", openModal);
close.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", function (e) {
  if (!modal.classList.contains("hidden") && e.key === "Escape") {
    closeModal();
  }
});
