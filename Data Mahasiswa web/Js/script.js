document.getElementById('kirimBtn').addEventListener('click', function () {
  const nama = document.getElementById('nama').value;
  const nim = document.getElementById('nim').value;
  const jenisKelamin = document.getElementById('jenisKelamin').value;
  const agama = document.getElementById('agama').value;
  const status = document.getElementById('status').value;
  const jurusan = document.getElementById('jurusan').value;
  const komentar = document.getElementById('komentar').value;

  const resultDiv = document.getElementById('result');

  if (nama && nim && status && jurusan) {
    resultDiv.innerHTML = `
          <h2>Data yang Dikirim:</h2>
          <p><strong>Nama:</strong> ${nama}</p>
          <p><strong>NIM:</strong> ${nim}</p>
          <p><strong>Jenis Kelamin:</strong> ${jenisKelamin}</p>
          <p><strong>Agama:</strong> ${agama}</p>
          <p><strong>Status:</strong> ${status}</p>
          <p><strong>Jurusan/Prodi:</strong> ${jurusan}</p>
          <p><strong>Komentar:</strong> ${komentar}</p>
      `;
  } else {
    resultDiv.innerHTML = `<p style="color:red;">Harap isi semua kolom yang wajib diisi!</p>`;
  }
});
