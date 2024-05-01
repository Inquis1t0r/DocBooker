// doctorSearch.js
import { LightningElement, track } from 'lwc';

export default class DoctorSearch extends LightningElement {
    @track specialization = '';
    @track location = '';
    @track searchResults = [];

    handleSpecializationChange(event) {
        this.specialization = event.target.value;
    }

    handleLocationChange(event) {
        this.location = event.target.value;
    }

    searchDoctors() {
        // Implementacja logiki wyszukiwania lekarzy (np. za pomocą Apex)
        // this.searchResults = wynikiWyszukiwania;
    }
}
