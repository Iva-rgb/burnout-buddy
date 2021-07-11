 <template>
    <div class="input-wrapper">
        <div>
            <label
                class="paragraph input-label"
                v-if="label != undefined"
                :for="label"
                >{{ label }}:</label
            >
            <span v-show="required" class="required-indicator">*</span>
        </div>
      <input
        :id="label"
        class="input-text"
        :type="type"
        :value="value"
        :readonly="readonly"
        @input="(event) => $emit('input', event.target.value)"
        @change="$emit('change')"
        :placeholder="placeholder"
        :disabled="disabled"
      />
      <!-- <span
        class="clear-inp"
        v-show="clearable"
        @click="(value) => $emit('clearInput', value)"
        ><fa class="fa-icon" icon="times"
      /></span> -->
    </div>
</template>

<script>
export default {
  props: {
    label: String,
    value: [Number, String],
    required: Boolean,
    placeholder: [String, null],
    disabled: [Boolean, null],
    type: {
      default: "text",
      type: String,
    },
    readonly: {
      default: false,
      type: Boolean,
    },
    clearable: {
      default: false,
      type: Boolean,
    },
  },
};
</script>

<style>
.input-wrapper {
  position: relative;
}
.input-wrapper .input-label {
  margin-bottom: 4px;
  text-align: left;
  display: inline-block;
}
.input-wrapper input {
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding: 8px 16px;
  font-family: "Raleway", sans-serif;
  border: 1px solid #cacaca;
  border-right: 8px solid #ade194;
  border-radius: 4px;
}
.input-wrapper input:active,
.input-wrapper input:focus {
  outline: none;
}
.input-wrapper.has-error .input-text {
  border: 1px solid var(--primary-red-color);
}
.input-wrapper .clear-inp {
  position: absolute;
  margin-left: -28px;
  margin-top: 11px;
  background: white;
  cursor: pointer;
}
.input-wrapper .clear-inp .fa-times {
  color: #7f7372a6;
}

/* fef0ae 
    c1e9af
    ade194
*/
</style>
