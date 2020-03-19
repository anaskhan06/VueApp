<template>
  <footer>
    <div class="footer">
      <div class="footer-logo">
        <div class="logo" v-if="crisptagLogo">
          <img :src="crisptagLogo" alt="Image not Found" />
        </div>
        <div class="SocialIcons">
          <img v-for="social in socialIcons" :key="social" :src="social" />
        </div>
      </div>

      <div class="footer-content">
        <div class="footer-info" v-if="footerDetails">
          <ul v-for="info in footerDetails" :key="info.title">
            <li class="heading">{{ info.title }}</li>
            <li class="Details" v-for="details in info.Details" :key="details">
              <router-link :to="details.link" class="detailsLink">{{ details.text }}</router-link>
            </li>
          </ul>
        </div>
      </div>

      <div class="footer-copyright">
        <div class="footer-copyright-text">{{ copyright }}</div>
        <div class="footer-copyright-logo">
          <img v-for="copyLogo in copyrightLogo" :src="copyLogo" :key="copyLogo" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import {
  lang,
  crisptagLogo,
  fbLogo,
  instaLogo,
  twitterLogo,
  ytLogo,
  startupLogo
} from "../common.js";

export default {
  name: "Footer",
  data: function() {
    let { footerDetails, copyright } = lang.footer;

    return {
      socialIcons: [fbLogo, instaLogo, twitterLogo, ytLogo],
      crisptagLogo,
      footerDetails,
      copyright,
      copyrightLogo: [startupLogo]
    };
  }
};
</script>

<style lang="scss" scoped>
footer {
  background-color: var(--footer-bgColor, #5555);
  div[class="footer"] {
    margin: 0 auto;
    width: 70%;
    div[class="footer-logo"] {
      display: flex;
      flex-wrap: wrap;
      padding: 20px;
      justify-content: space-between;
      border-bottom: 1px solid #0000000f;

      div[class="logo"] {
        flex-wrap: wrap;
        img {
          height: 33px;
          width: 120px;
        }
      }
      div[class="SocialIcons"] {
        display: flex;
        flex-wrap: wrap;
        img {
          margin: 0 12px;
          height: 30px;
          width: 30px;
        }
      }
    }
    .detailsLink {
      text-decoration: none;
      color: var(--footerDetails-color);
    }
    div[class="footer-content"] {
      padding: 20px;
      margin-top: 9px;
      border-bottom: 1px solid #0000000f;

      div[class="footer-info"] {
        display: flex;
        flex-wrap: wrap;

        ul {
          list-style: none;
          align-items: center;
          margin-right: 5em;
          li[class="heading"] {
            font-family: "Roboto";
            font-size: 16px;
            color: var(--footerHeading-color, black);
            margin-bottom: 10px;
          }
          li[class="Details"] {
            font-family: "Roboto";
            font-size: 14px;
            color: var(--footerDetails-color, black);
            margin-bottom: 11px;
          }
        }
      }
    }
    div[class="footer-copyright"] {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 20px;
      align-items: center;
      div[class="footer-copyright-text"] {
        font-size: 14px;
        font-family: "Roboto";
        color: var(--copyrightText-color, blue);
      }
      div[class="footer-copyright-logo"] {
        align-items: center;
        img {
          width: 64px;
          height: 37px;
        }
      }
    }
  }
}
@media all and (max-width: 650px) {
  div[class="footer-logo"] {
    flex-direction: column;
    text-align: center;
  }
  div[class="SocialIcons"] {
    margin-top: 20px;
    justify-content: space-evenly;
    text-align: center;
  }
  div[class="footer-info"] {
    flex-direction: column;
    align-content: center;
    justify-content: center;
    // margin-right: 0em;
  }

  div[class="footer-copyright"] {
    flex-direction: column;
    margin: 12px;
    text-align: center;
    div[class="footer-copyright-text"] {
      text-align: center;
    }
    div[class="footer-copyright-logo"] {
      margin-top: 12px !important;
      span {
        text-align: center;
        justify-content: center;
        align-content: center;
      }
    }
  }
}
</style>