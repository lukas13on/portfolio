<script>
import $ from "jquery";
import Swal from "sweetalert2";

export default {
  name: "homepage-contact",
  data: function () {
    return {
      submitted: false,
      supported: {
        input: ["text", "tel", "email"],
        select: ["select"],
        textarea: ["textarea"],
      },
      groups: [
        {
          id: "name",
          label: "Nome completo",
          tooltip: "Qual o seu nome, mesmo?",
          initial: true,
          required: true,
          valid: true,
          mask: false,
          control: {
            value: "",
            placeholder: "Insira seu nome completo",
            type: "text",
            minlength: 10,
            maxlength: 255,
          },
        },
        {
          id: "email",
          label: "Endereço de e-mail",
          initial: true,
          tooltip: "Insira um e-mail válido para eu entrar em contato.",
          required: true,
          valid: true,
          mask: false,
          control: {
            value: "",
            placeholder: "Insira um e-mail para o contato",
            type: "text",
            minlength: 5,
            maxlength: 255,
          },
        },
        {
          id: "phone",
          label: "Telefone",
          tooltip: "Insira um telefone válido para eu entrar em contato.",
          initial: true,
          required: true,
          valid: true,
          mask: "phone",
          control: {
            value: "",
            placeholder: "Insira um telefone para o contato",
            type: "tel",
            minlength: 14,
            maxlength: 15,
          },
        },
        {
          id: "propose",
          label: "Propósito",
          tooltip: "Selecione o propósito do seu contato.",
          initial: true,
          required: true,
          valid: true,
          mask: false,
          control: {
            value: "false",
            options: [
              {
                text: "Proposta de trabalho",
                value: "job",
              },
              {
                text: "Manutenção em geral",
                value: "all",
              },
              {
                text: "Outros assuntos",
                value: "all",
              },
            ],
            placeholder: "Selecione uma opção",
            type: "select",
          },
        },
        {
          id: "message",
          label: "Mensagem",
          tooltip: "Sua mensagem para o contato.",
          initial: true,
          required: false,
          valid: true,
          mask: false,
          control: {
            value: "",
            placeholder: "Insira seu mensagem",
            type: "textarea",
            minlength: 30,
            maxlength: 255,
          },
        },
      ],
    };
  },
  methods: {
    submit: function () {
      if (!this.submitted) {
        this.scan();
        if (this.validation) {
          alert("Sucesso!");
        } else {
          Swal.fire({
            icon: "error",
            title: "Ocorreu um erro",
            showConfirmButton: true,
            confirmButtonText: "Continuar preenchendo",
            html:
              /*html*/
              `<p>Por favor, preencha corretamente todos os campos do formulário.</p>`,
            footer:
              /*html */
              `<p class="p-4 text-center">
                  <span>Caso não consiga utilizar, você pode mandar um email diratamente para</span>
                  <a href="mailto:luka.pc.pc@gmail.com">luka.pc.pc@gmail.com</a>
                </p>`,
          }).then(function (result) {
            if (result.isConfirmed) {
              window.location.href = "#contact";
            }
          });
        }
      }
    },
    tooltip: function (id) {
      var group = this.groups[this.indexer(id)];
      var control = group.control;
      var tooltip = group.tooltip;

      var rules = (function (required, min, max) {
        var html =
          /*html */
          `<ul class="list-unstyled">`;

        if (required) {
          html +=
            /*html*/
            `<li>Esse campo é requerido.</li>`;
        }

        if ((min && max) !== undefined) {
          html +=
            /*html*/
            `<li>Entre ${min} à ${max} caracteres.</li>`;
        }

        html +=
          /*html*/
          `</ul>`;

        return html;
      })(group.required, control.minlength, control.maxlength);

      Swal.fire({
        icon: false,
        title: "Caixa de ajuda",
        showConfirmButton: true,
        confirmButtonText: "Entendido",
        confirmButtonColor: "#0d6efd",
        html:
          /*html*/
          `<p>${tooltip}</p>`,
        footer:
          /*html*/
          `<p>${rules}</p>`,
      });
    },
    /** um atalho para o index do grupo */
    indexer: function (id) {
      return this.groups.findIndex(function (group) {
        return group.id === id;
      });
    },
    /** normaliza o estado inicial do grupo  */
    normalize: function (id) {
      this.groups[this.indexer(id)].initial = false;
    },
    /** valida um grupo  */
    validate: function (event, id) {
      //console.log(event, id);
      this.normalize(id);
      var validated = this.validator(id);
      this.groups[this.indexer(id)].valid = validated;
    },
    mask: function (event, id) {
      var mask = $(event.target).attr("data-mask");

      var masks = {
        phone: function (value) {
          var numbers = value.replace(/\D/g, "");
          var ddd = numbers.substring(0, 2);
          var firstSize = numbers.length >= 11 ? 7 : 6;
          //console.log(firstSize);
          var first = numbers.substring(2, firstSize);
          //console.log(first);
          var second = numbers.substring(first.length + 2);
          //console.log(second);
          var phone = "(" + ddd + ") " + first + "-" + second;
          phone = value.trim() === "" ? "" : phone;
          return phone.substring(0, 15).trim();
          //console.log(phone);
          //return "seila";
        },
      };

      if (event.type === "blur") {
        for (var key in masks) {
          if (key === mask) {
            var value = this.groups[this.indexer(id)].control.value;
            this.groups[this.indexer(id)].control.value = masks[key](value);
            //console.log("so esse");
          }
        }
      }
    },
    /** valida todos os grupos */
    scan: function () {
      for (var key in this.groups) {
        var id = this.groups[key].id;
        this.normalize(id);
        var validated = this.validator(id);
        this.groups[key].valid = validated;
      }
    },
    /** classes dos inputs */
    controlClass: function (id) {
      var group = this.groups[this.indexer(id)];
      var valid = group.valid;
      var clss = "form-control form-control-lg";
      clss = this.groups[this.indexer(id)].initial ? clss : clss + " is-valid ";
      return valid ? clss : clss + " is-invalid";
    },
    /** verifica se um grupo e valido */
    validator: function (id) {
      /** lista de validadores */
      var checkouts = {
        /** validacao de tamanho */
        size: function (group) {
          console.log("Aqui", group);
          if (group.control.minlength && group.control.maxlength) {
            var cur = group.control.value.length;
            var minlength = group.control.minlength;
            var maxlength = group.control.maxlength;
            var min = cur >= minlength ? true : false;
            var max = cur <= maxlength ? true : false;
            return min && max ? true : false;
          } else {
            return true;
          }
        },
        /** validacao de email */
        email: function (group) {
          if (group.id === "email") {
            var val = group.control.value;
            return (val.indexOf("@") && val.indexOf(".")) !== -1 ? true : false;
          } else {
            return true;
          }
        },
        /** validacao do elemento select */
        select: function (group) {
          var type = group.control.type;
          if (type === "select") {
            var value = group.control.value.toLowerCase();
            if (value === "null" || value === "false" || value === "") {
              return false;
            } else {
              return true;
            }
          } else {
            return true;
          }
        },
      };
      var that = this;
      console.log(that.groups);
      var group = this.groups[this.indexer(id)];
      var errors = 0;

      /** performa todos os validadores para o grupo */
      for (var key in checkouts) {
        var checkout = checkouts[key];
        var valid = checkout(group);
        if (!valid) {
          errors++;
        }
      }

      return errors === 0 ? true : false;
    },
  },
  computed: {
    /** computa se o fomulario atual e valido */
    validation: function () {
      var errors = 0;

      for (var key in this.groups) {
        if (!this.groups[key].valid) {
          errors++;
        }
      }

      return errors === 0 ? true : false;
    },
  },
};
</script>

<template>
  <!-- <Section> -->
  <section id="contact">
    <div class="container-fluid p-0">
      <div class="bg-secondary bg-circle text-light">
        <h1>Contato</h1>
        <p>Preencha os dados corretamente para entrar em contato.</p>
      </div>

      <div class="row m-0 p-block">
        <div class="col-12 col-lg-6 d-none d-lg-block my-auto">
          <img
            class="w-100"
            :src="require('@/src/assets/images/contact.svg')"
            alt="Imagem ilustrativa"
          />
        </div>

        <form class="col-12 col-lg-6 row m-0 p-0" @submit.prevent="submit()">
          <div
            v-for="(group, index) in groups"
            class="col-12 mb-2"
            :key="index"
          >
            <div class="form-group">
              <label :for="'input-' + group.id">
                <button
                  data-action="tooltip"
                  @click.prevent="tooltip(group.id)"
                  type="button"
                  class="btn btn-link"
                >
                  <i class="fa fa-question-circle"></i>
                </button>
                <span>{{ group.label }}</span>
              </label>

              <!-- <Input> -->
              <input
                v-if="supported.input.indexOf(group.control.type) !== -1"
                :data-mask="group.mask"
                @blur.prevent="
                  mask($event, group.id);
                  validate($event, group.id);
                "
                :class="controlClass(group.id)"
                :type="group.control.type"
                v-model="group.control.value"
                :placeholder="group.control.placeholder"
                :id="'input-' + group.id"
                :name="group.id"
              />
              <!-- </Input> -->

              <!-- <Select> -->
              <select
                v-else-if="supported.select.indexOf(group.control.type) !== -1"
                @change.prevent="validate($event, group.id)"
                :class="controlClass(group.id)"
                v-model="group.control.value"
                :placeholder="group.control.placeholder"
                :name="group.id"
              >
                <option value="false">Selecione uma opção</option>
                <option
                  v-for="(option, index) in group.control.options"
                  :value="option.value"
                  :key="index"
                >
                  {{ option.text }}
                </option>
              </select>
              <!-- </Select> -->

              <!-- <Textarea> -->
              <textarea
                v-else-if="
                  supported.textarea.indexOf(group.control.type) !== -1
                "
                @keyup.prevent="validate($event, group.id)"
                :class="controlClass(group.id)"
                v-model="group.control.value"
                :placeholder="group.control.placeholder"
                :name="group.id"
              ></textarea>
              <!-- </Textarea> -->

              <div v-if="!group.valid" class="invalid-feedback">
                <span
                  >Esse campo está incorreto, por favor verifique
                  novamente.</span
                >
              </div>
            </div>
          </div>

          <div class="col-12">
            <div class="button-group text-center text-md-end mt-2">
              <button
                type="submit"
                :class="
                  'btn btn-lg' +
                  (!validation ? ' btn-danger disabled' : ' btn-primary')
                "
                :disabled="!validation"
              >
                Solicitar contato
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
  <!-- </Section> -->
</template>