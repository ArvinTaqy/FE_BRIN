//import "../App.css";

function Dashboard() {
    return (
    <><h1>
        Perangkat ATHUS
    </h1>
    <p>Perangkat yang terdaftar</p><div class="section mt-2">
            <form action="" method="POST">
                <div class="row">
                    <div class="col-sm-2">
                        <div class="form-group mt-2 mb-2 pd-2">
                            <select name="id_provinsi" id="provinsi" class="form-select">
                                <option value="">Perangkat</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="form-group mt-2 mb-2 pd-2">
                            <select name="id_kota" id="kota" class="form-select" disabled>
                                <option value="">Kota</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="form-group mt-2 mb-2 pd-2">
                            <select name="id_kecamatan" id="kecamatan" class="form-select" disabled>
                                <option value="">Kecamatan</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="form-group mt-2 mb-2 pd-2">
                            <select name="id_desa" id="desa" class="form-select" disabled>
                                <option value="">Desa</option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>
        </div></>
    )
}

export default Dashboard;