import hasKey from '../old/src_old/hasKey';

const profile = {
    id: 1,
    first_name: 'John',
    last_name: 'Doe',
    email: 'johndoe@test.com',
    gender: 'male',
};

test('Test function "hasKey"', () => {
    expect(hasKey(profile, 'id')).toBe(true);
    expect(hasKey(profile, 'middle_name')).toBe(false);
});