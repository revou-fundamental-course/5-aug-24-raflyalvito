const btn = document.getElementById("kalkulasi");

btn.addEventListener("click", function () {
  event.preventDefault();
  let tinggi = document.getElementById("tinggi").value;
  let berat = document.getElementById("berat").value;
  let usia = document.getElementById("usia").value;
  let jenisKelamin = document.querySelector(
    'input[name="jenis-kelamin"]:checked'
  );

  if (tinggi == "" || berat == "" || usia == "" || !jenisKelamin) {
    alert("isi semua form");
  }

  tinggi = tinggi / 100;

  let bmi = berat / (tinggi * tinggi);
  bmi = bmi.toFixed(2);
  //   console.log(bmi);

  document.getElementById("hasil-bmi").innerHTML = bmi;
  let status = "";

  if (bmi < 18.5) {
    status = "kurang berat badan";
  }
  if (bmi >= 18.5 && bmi < 25) {
    status = "normal";
  }
  if (bmi > 25 && bmi < 30) {
    status = "kelebihan berat badan";
  }
  if (bmi >= 30) {
    status = "obesitas";
  }

  //   const commentElement = document.getElementById("comment");
  //   let commentText;
  //   switch (status) {
  //     case "kurang berat badan":
  //       commentText = " Anda perlu meningkatkan berat badan Anda";
  //       break;
  //     case "normal":
  //       commentText = " Berat badan Anda sudah ideal";
  //       break;
  //     case "kelebihan berat badan":
  //       commentText = " Anda perlu mengurangi berat badan Anda";
  //       break;
  //     case "obesitas":
  //       commentText = " Anda perlu mengurangi berat badan Anda secara signifikan";
  //       break;
  //     default:
  //       commentText = "";
  //   }

  //   commentElement.innerHTML = commentText;

  //   document.getElementById("hasil-bmi").innerHTML = bmi;

  document.getElementById(
    "comment"
  ).innerHTML = `kamu adalah: <span> ${status} </span>`;
});
