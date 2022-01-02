<template>
  <section class="register-company-page-section">
    <div class="header-page">
      <i-akar-icons-chevron-left/>
      <router-link to="/list-companies">Empresas/Cadastrar Empresa</router-link>

      <button @click="saveNewCompany" class="save-company" type="button">SALVAR</button>
    </div>

    <section class="company-informations">
      <div class="img-input-container">
        <upload-image @changed="handleImage" :max="1" uploadMsg=" "/>
      </div>

      <div class="data-inputs-container">
        <select-input v-model="newCompany.documentType" placeholder="CPF" :options="documentOptions" title="Tipo de documento"/>
        <TextInput v-model="newCompany.document" placeholder="Documento" :mask="maskDocument" />
        <text-input v-model="newCompany.name" placeholder="Nome completo/Razão social"/>
        <text-input v-model="newCompany.email" placeholder="E-mail"/>
        <text-input v-model="openingDateTemp" placeholder="Data de abertura" mask="##/##/####"/>
      </div>
    </section>

    <section class="company-address">
      <h4>Endereço</h4>

      <div class="address-container">
        <text-input v-model="newCompany.address.postalCode" class="input-address" placeholder="CEP" mask="#####-###" />

        <text-input v-model="newCompany.address.address" class="input-address" placeholder="Endereço" />
      </div>
      <div class="complement-container">
        <text-input v-model="newCompany.address.numberAddress" class="input-address" placeholder="Número" mask="#######"/>
        <text-input v-model="newCompany.address.complement" class="input-address" placeholder="Complemento" />
        <text-input v-model="newCompany.address.district" class="input-address" placeholder="Bairro" />
        <text-input v-model="newCompany.address.uf" class="input-address" placeholder="UF" />
        <text-input v-model="newCompany.address.city" class="input-address" placeholder="Cidade" />
      </div>
    </section>

  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import SelectInput from "../components/SelectInput.vue";
import TextInput from "../components/TextInput.vue";
import UploadImages from "vue-upload-drop-images"
import { Address, Company, DocumentType } from "../components/Types";
import { v4 as uuidv4 } from "uuid";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "RegisterCompany",

  components: {
    "text-input": TextInput,
    "select-input": SelectInput,
    "upload-image": UploadImages
  },

  setup() {
    const store = useStore()
    const router = useRouter()
    const documentOptions = [{
      title: "CPF",
      value: "CPF"
    },
      {
        title: "CNPJ",
        value: "CNPJ"
      }]
    const newCompany: Company = reactive<Company>({
      id: uuidv4(),
      image: '',
      documentType: 'CPF',
      document: '',
      name: '',
      email: '',
      openingDate: new Date(),
      address: {} as Address
    })
    const openingDateTemp = ref('')

    const handleImage = (files: Array<File>) => newCompany.image = window.URL.createObjectURL(files[0])

    const saveNewCompany = () => {
      const date = openingDateTemp.value.split('/')
      newCompany.openingDate = new Date(date[2] + '/' + date[1] + '/' + date[0])
      store.dispatch('saveNewCompany', newCompany).then(res => {
        router.push("/list-companies")
      })
    }

    return {
      documentOptions: documentOptions,
      newCompany: newCompany,
      openingDateTemp: openingDateTemp,
      maskDocument: '["###.###.###-##", "##.###.###/####-##"]',
      handleImage: handleImage,
      saveNewCompany: saveNewCompany
    }
  }
})
</script>

<style lang="scss" scoped>
.register-company-page-section {
  width: 1440px;

  .header-page {
    background-color: var(--secondary);
    padding: 20px 20px;
    box-sizing: border-box;
    color: #FFFFFF;
    font-weight: 500;
    display: flex;

    a {
      color: #FFFFFF;
      font-weight: 500;
      text-decoration: none;
    }

    .save-company {
      margin-left: auto;
      background-color: var(--text-color-primary);
      border: 1px solid var(--text-color-primary);
      border-radius: 4px;
      padding: 10px 22px;
      box-sizing: border-box;
      color: #FFFFFF;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      cursor: pointer;
    }
  }

  .company-informations {
    background-color: #FFFFFF;
    display: flex;
    flex-direction: row;
    padding: 15px 30px 30px 15px;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.26);
    margin-bottom: 25px;

    .img-input-container {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      padding-right: 25px;

      .container {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        padding: 0;

        ::v-deep .beforeUpload {
          width: 64px;
          height: 64px;
          border-radius: 50%;

          .icon {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            object-fit: cover;
          }
        }

        ::v-deep .imgsPreview {
          width: 64px;
          height: 64px;
          border-radius: 50%;

          .imageHolder {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            object-fit: cover;
            margin: 0;

            img {
              border-radius: 50%;
            }

            .plus {
              display: none;
            }
          }
        }
      }
    }

    .data-inputs-container {
      width: 100%;
      display: grid;
      flex-wrap: wrap;
      grid-gap: 30px;
      grid-template-columns: repeat(auto-fill, minmax(413px, 0fr) );

    }
  }

  .company-address {
    background-color: #FFFFFF;
    padding: 15px 30px 30px 15px;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.26);

    h4 {
      margin-bottom: 30px;
    }

    .address-container {
      margin-bottom: 30px;
      display: grid;
      grid-gap: 30px;
      grid-template-columns: 35% 1fr;
    }

    .complement-container {
      display: grid;
      grid-gap: 30px;
      grid-template-columns: repeat(auto-fill, minmax(249px, 0fr)) 20%
    }

  }
}
</style>