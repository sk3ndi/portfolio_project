<template>
    <section id="contact" class="uk-section uk-padding-remove-vertical">
      <div class="uk-container">
        <div class="uk-flex-middle uk-grid uk-grid-large uk-height-viewport" uk-grid> <!-- ::::  acts as row  ::: !-->

            <!-- Left Side !-->
            <div class="uk-width-1-2@m uk-animation-scale-up uk-animation uk-visible@m" style="animation-delay: 750ms;" uk-grid>
              <div class="uk-width-3-4 uk-padding uk-align-center">
                <img class="uk-preserve" src="@/assets/svg/email_icon.svg" alt="Email Me Now!"  uk-svg />
              </div>
            </div>

            <!-- Right Side !-->
            <div class="uk-width-expand@m uk-animation-scale-up uk-animation uk-text-center uk-text-left@m" style="animation-delay: 1050ms;">
                <h1 class="title">Have Any Queries?</h1>
                <p>I'm looking forward to hear from you! I'm open for new feedback, suggestions and oppotunities for my improvement.</p>
                <p>If you have any questions or need my assistance, feel free to drop me a message on the following icon links below.</p>
                <p>I'll get back to you as soon as possible.</p>

                <!-- Icon Lists !-->
                <ul class="uk-iconnav uk-margin-large-top uk-flex-center uk-flex-left@m">
                  <li><a href="mailto:thedev.kenalbert@gmail.com" class="uk-icon-link uk-margin-small-right" target="_blank" uk-tooltip="title: EMAIL; pos: top-left; delay: 150" uk-icon="icon: mail; ratio: 1.5;"></a></li>
                  <li><a href="skype:tornoalbert?chat" class="uk-icon-link uk-margin-small-right" target="_blank" uk-tooltip="title: SKYPE; pos: top-left; delay: 150" uk-icon="icon: receiver; ratio: 1.5;"></a></li>
                  <li><a href="https://www.linkedin.com/in/albert-t-98155165/" class="uk-icon-link uk-margin-small-right" target="_blank" uk-tooltip="title: LINKEDIN; pos: top-left; delay: 150" uk-icon="icon: linkedin; ratio: 1.5;"></a></li>
                  <li><a href="https://github.com/sk3ndi" target="_blank" uk-tooltip="title: GITHUB; pos: top-left; delay: 150" uk-icon="icon: github; ratio: 1.5;"></a></li>
                </ul>
            </div>
          </div>
        </div>
    </section>
</template>
