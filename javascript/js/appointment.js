import Client from "./client";

class AppointmentClient {
  async get() {
    const client = new Client();
    return client.request('Appointment/1');
  }

  async create() {
    const client = new Client();
    return client.create({
      resourceType: "Appointment",
      contained: [{
        resourceType: "Patient",
        id: "patient",
        identifier: [{
          system: "urn:oid:2.16.840.1.113883.2.4.99",
          value: "1234"
        }],
        name: [{
          text: "Test Patient"
        }],
        telecom: [{
          system: "email",
          value: "test@patient.ohh"
        }]
      }],
      extension: [{
        url: "http://openhealthhub.com/fhir/StructureDefinition/appointment-pin",
        valueString: "59gladtc"
      }],
      supportingInformation: [{
        reference: "PlanDefinition/cca2eaf3-03a9-46c0-88c6-e0287917cea6"
      }],
      start: "2021-03-16T13:32:37.430+01:00",
      participant: [{
        actor: {
          reference: "#patient"
        },
        status: "needs-action"
      }]
    });
  }
}

export default AppointmentClient;
