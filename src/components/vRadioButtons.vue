 <template>
    <div class="radio-buttons-wrapper">
      <label class="paragraph" v-if="label != undefined">{{ label }}:</label>
      <span v-show="required" class="required-indicator">*</span>
      <div class="btn-container" :class="{'inline-radio-buttons': buttonsInline}">
        <div
          class="radio-option"
          v-for="option in options"
          :key="option.value"
          @click.prevent="$emit('input', option.value)"
        >
          <label class="radio-button" :for="id"
            >{{ option.name }}
            <input
              type="radio"
              :value="option.value"
              :id="id"
              :checked="option.value === value"
            />
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: [Number, String],
    options: Array,
    required: Boolean,
    buttonsInline: Boolean,
  },
  data() {
    return {
      id: "",
    };
  },
  mounted() {
    this.id = Math.random().toString(36).substring(2, 6);
  },
};
</script>

<style scoped>
.radio-buttons-wrapper .btn-container {
  margin-top: 8px;
}
.radio-button {
  display: block;
  position: relative;
  padding-left: 22px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 14px;
  user-select: none;
}

/* Hide the browser's default radio button */
.radio-button input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 16px;
  width: 16px;
  background-color: #fff;
  border-radius: 50%;
  border: 1px solid rgb(71 82 93 / 47%);
}

/* On mouse-over, add a grey background color */
.radio-button:hover input ~ .checkmark {
  background-color: rgb(255, 255, 255);
}

/* When the radio button is checked, add a blue background */
.radio-button input:checked ~ .checkmark {
  background-color: hsl(101, 56%, 50%);
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.radio-button input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.radio-button .checkmark:after {
  top: 3px;
  left: 3px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}

</style>
