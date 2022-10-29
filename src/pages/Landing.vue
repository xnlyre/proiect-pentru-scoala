<template>
  <div>
    <div class="page-header page-header-small">
      <parallax
        class="page-header-image"
        style="background-image: url('img/hacker.jpg')"
      >
      </parallax>
      <div class="content-center">
        <div class="container">
          <h1 class="title-main">Securitatea cibernetica</h1>
        </div>
      </div>
    </div>
    <div class="section section-about-us">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">Ce este aceasta?</h2>
            <h5 class="description-main">
              Securitatea cibernetică, numită și securitate digitală, este
              practica de a proteja informațiile, dispozitivele și activele
              digitale. Între acestea se numără informațiile personale,
              conturile, fișierele, fotografiile și chiar banii.
            </h5>
          </div>
        </div>
        <div class="separator separator-primary"></div>
        <div class="section-story-overview">
          <div class="row">
            <div class="col-md-6">
              <div
                class="image-container image-left"
                style="background-image: url('img/cards.jpg')"
              ></div>
              <div class="description-container">
                <h5 class="description-sec">
                  Fără o securitate informatică adecvată, informațiile dvs.
                  bancare, mesajele private sau activitățile online ar putea fi
                  văzute de oricine (în acest scop vă poate ajuta un VPN).
                  Atacurile cibernetice ar putea paraliza spitalele, băncile,
                  transporturile, comunicațiile și diferitele organizații
                  furnizoare de utilități.
                </h5>
              </div>

              <div
                class="image-container"
                style="background-image: url('img/north-vpn-image.jpg')"
              ></div>
            </div>
            <div class="col-md-5">
              <div
                class="image-container image-right"
                style="background-image: url('img/monitor-with-code.jpg')"
              ></div>
              <h1 class="title">
                Pentru ce este securitatea cibernetică importanta?
              </h1>
              <h5 class="description-sec">
                Majoritatea sistemelor care gestionează serviciile pe care le
                folosim zilnic s-au mutat online. De la organizații financiare
                și îngrijire medicală, până la rețele electrice care alimentează
                orașe întregi – aceste sisteme se bazează pe tehnologia
                digitală. Protecția cibernetică este ceea ce le permite să
                funcționeze corespunzător – este zidul de apărare care ține la
                distanță atacurile cibernetice. Fără o securitate informatică
                adecvată, informațiile dvs. bancare, mesajele private sau
                activitățile online ar putea fi văzute de oricine (în acest scop
                vă poate ajuta un VPN). Atacurile cibernetice ar putea paraliza
                spitalele, băncile, transporturile, comunicațiile și diferitele
                organizații furnizoare de utilități.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "landing",
  bodyClass: "landing-page",
  data() {
    return {
      form: {
        firstName: "",
        email: "",
        message: "",
      },
    };
  },
};
</script>
<style>
.title-main {
  font-size: 135px;
  font-weight: 700;
}
.description-main {
  color: black;
  text-align: center;
}

.description-container {
  margin-top: 100px;
  margin-bottom: 100px;
}

.description-sec {
  color: black;
  text-align: left;
}
</style>
