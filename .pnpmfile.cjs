module.exports = {
  hooks: {
    readPackage(pkg) {
      // This UTS release uses the target suffix "gnu" as libc metadata.
      // pnpm expects "glibc", otherwise it skips the Linux native binding.
      if (pkg.name === '@dcloudio/uts-linux-x64-gnu' && pkg.version === '3.0.0-5020620260917001') {
        pkg.libc = ['glibc']
      }
      return pkg
    },
  },
}
