import GenerateGUID from "../src/GenerateGUID";

test('Generates a GUID', () => {
    const guid = GenerateGUID();
    expect(guid).toMatch(/[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/);
});
