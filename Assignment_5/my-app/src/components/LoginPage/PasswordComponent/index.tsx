export default function PasswordComponent({
  password,
  onChangePassword,
  setFocusOnPassword,
}: any) {
  return (
    <div>
      <label>Password</label>
      <input
        value={password}
        onChange={onChangePassword}
        onFocus={() => setFocusOnPassword(true)}
        onBlur={() => setFocusOnPassword(false)}
      />
    </div>
  );
}
