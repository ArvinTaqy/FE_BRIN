function Add() {
    return (
        <><h1>
            Tambah Perangkat ATHUS
        </h1><section class="section mt-5">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card" /*style="min-height: 94%"*/>
                            <div class="card-header">
                                <h4 class="card-title">Penambahan Perangkat</h4>
                            </div>
                            <div class="card-body">
                                {/*<p>{{ session(); }}</p> */}
                                <form id="register" method="POST" action="api/storeNew" class="form-horizontal">
                                    {/* @csrf */}
                                    <div class="form-group">
                                        <label for="input1" class="col-sm-2 control-label">Provinsi</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="input1" name="nama_provinsi"
                                                value="{{ old('input1') }}"></input>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="input2" class="col-sm-2 control-label">Kota</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="input2" name="nama_kota"
                                                value="{{ old('input2') }}"></input>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="input3" class="col-sm-2 control-label">Kecamatan</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="input3" name="nama_kecamatan"
                                                value="{{ old('input3') }}"></input>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="input4" class="col-sm-2 control-label">Desa</label>
                                        <div class="col-sm-10">
                                            <input type="text" class="form-control" id="input4" name="nama_desa"
                                                value="{{ old('input4') }}"></input>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="col-sm-offset-2 col-sm-10">
                                            <button type="submit" class="btn btn-success">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section></>
    )
}

export default Add;