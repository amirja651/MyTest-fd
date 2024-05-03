<template>
  <div id="app2">
    <div class="calculator-container">
      <h1>Car Auction Pricing Calculator</h1>
      <div class="input-group">
        <label>Enter base price</label>
        <input
          v-model="basePrice"
          placeholder="Enter base price"
          class="input-field"
          type="number"
        />
        <select v-model="vehicleType" class="input-field">
          <option value="Common">Common</option>
          <option value="Luxury">Luxury</option>
        </select>
      </div>

      <button @click="calculateTotal" class="calc-button">
        Calculate Total
      </button>
      <h2>Total Price: {{ totalPrice }}</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      basePrice: 0,
      vehicleType: "Common",
      totalPrice: 0,
    };
  },
  methods: {
    calculateTotal() {
      axios
        .post("http://localhost:5078/calculator", {
          basePrice: parseFloat(this.basePrice),
          vehicleType: this.vehicleType,
        })
        .then((response) => {
          this.totalPrice = response.data;
        })
        .catch((error) => {
          console.error("There was an error!", error);
        });
    },
  },
};
</script>

<style scoped>
#app2 {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f4f4f9;
}

.calculator-container {
  text-align: center;
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.input-group {
  margin-bottom: 20px;
}

.input-field {
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  display: block;
}

.calc-button {
  background-color: #0056b3;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.calc-button:hover {
  background-color: #003580;
}

h1 {
  color: #333;
  margin-bottom: 18px;
}

h2 {
  color: #0056b3;
  margin-top: 14px;
}
</style>