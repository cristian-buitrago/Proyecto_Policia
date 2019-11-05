@extends('layouts.app')
@section('content')
 <div class="container">
  <div class="row justify-content-center">
   <div class="col-md-8">
       <a class="volver_negro" href="{{ url()->previous() }}">volver atrás</a>

    <div class="card">
     <div>
      <h1>VER PEDIDO</h1>
      <p>No: {{ $personalization->trackint }}</p>
     </div>
     <div class="card-body">
      @csrf
        <div class="form-group row">
            <label class="col-md-4 col-form-label text-md-right border-right">Imagen</label>
            <div class="col-md-6 mt-2">
                <img class="h-10 w-75" src="{{ asset('personalizacion/'. $personalization->image) }}" alt="">
            </div>
        </div>
        <div class="form-group row">
            <label class="col-md-4 col-form-label text-md-right border-right">Usuario</label>
            <div class="col-md-6 mt-2">
            <p>{{ $personalization->nameClient }} {{ $personalization->surnameClient }}</p>
            <p>{{ $personalization->email }}</p>
            <p># {{ $personalization->trackint }}</p>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-md-4 col-form-label text-md-right border-right">Estado</label>
            <div class="col-md-6 mt-2">
                <div class="d-flex flex-row justify-content-center align-items-center mt-2 flex-wrap">
                    <span class="d-flex flex-column p-0 text-center">
                        <button class="changeStateShirt @if($personalization->trackints->statuss->status=='Diseño') bg-success @else 'bg-secondary' @endif" title="1" name="{{ $personalization->trackint }}"></button>
                        <h6>diseño</h6>
                    </span>
                    <span class="d-flex flex-column p-0 text-center">
                        <button class="changeStateShirt @if($personalization->trackints->statuss->status=='Pedido') bg-success @else 'bg-secondary' @endif" title="2" name="{{ $personalization->trackint }}"></button>
                        <h6>pedido</h6>
                    </span>
                    <span class="d-flex flex-column p-0 text-center">
                        <button class="changeStateShirt @if($personalization->trackints->statuss->status=='enCurso') bg-success @else 'bg-secondary' @endif" title="3" name="{{ $personalization->trackint }}"></button>
                        <h6>en curso</h6>
                    </span>
                    <span class="d-flex flex-column p-0 text-center">
                        <button class="changeStateShirt @if($personalization->trackints->statuss->status=='Listo') bg-success @else 'bg-secondary' @endif" title="4" name="{{ $personalization->trackint }}"></button>
                        <h6>listo</h6>
                    </span>
                    <span class="d-flex flex-column p-0 text-center">
                        <button class="changeStateShirt @if($personalization->trackints->statuss->status=='Entregado') bg-success @else 'bg-secondary' @endif" title="5" name="{{ $personalization->trackint }}"></button>
                        <h6>entregado</h6>
                    </span>
                </div>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-md-4 col-form-label text-md-right border-right">Pais</label>
            <div class="col-md-6 mt-2">
                <p>{{ $personalization->stores->cities->countries->name }}</p>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-md-4 col-form-label text-md-right border-right">Ciudad</label>
            <div class="col-md-6 mt-2">
                <p>{{ $personalization->stores->cities->name }}</p>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-md-4 col-form-label text-md-right border-right">Tienda</label>
            <div class="col-md-6 mt-2">
                <p>{{ $personalization->stores->name }}</p>
            </div>
        </div>  
        <div class="card-header
            @switch($personalization->trackints->statuss->status)
                @case('pendiente') bg-warning @break
                @case('procesando') bg-danger @break
                @case('finalizado') bg-success @break
            @endswitch">
            Pedido #{{ $personalization->trackint }},  Cliente: {{ $personalization->nameClient }}, Estado Pedido: {{ $personalization->trackints->statuss->status }}
        </div>
        <form class="card-body" method="get" action="{{ route('personalization.message', $personalization->trackint) }}">
            <div class="form-group row">
                <div class="col-md-5">
                    <textarea class="form-control rounded-0" id="exampleFormControlTextarea1" rows="10" name="message"></textarea>
                </div>
            </div>
            <div class="text-right col-md-10">
                <button class="btn btn-dark" type="submit" value="Enviar mensaje">Enviar Mensaje</button>
            </div>
        </form>
        <div class="form-group row">
            <div class="text-right col-md-4">
                <button class="btn btn-dark" href="{{ route('personalization.shirts') }}">Regresar</button>
            </div>
        </div>
     </div>
    </div>
   </div>
  </div>
 </div>
@endsection