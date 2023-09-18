type Theme = 'light' | 'dark'

export const useTheme = (defaultTheme: Theme = 'dark') =>{
  const theme = ref()

  const setTheme = () =>{
    const newTheme = theme.value === 'light' ? 'dark' : 'light'

    document.documentElement.classList?.remove(theme.value);
    document.documentElement.classList?.add(newTheme);

    theme.value = newTheme;
    localStorage.setItem('theme', newTheme);
  }

  onMounted(()=>{
    theme.value = localStorage.getItem('theme') || defaultTheme;

    document.documentElement.classList.add(theme.value || defaultTheme)
  })

  return {
    theme,
    setTheme
  }
}